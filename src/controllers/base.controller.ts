import { Response, Router } from 'express'
import { IControllerRoute } from '../interfaces/route.interface'

export abstract class BaseController {
    private readonly _router: Router

    constructor() {
        this._router = Router()
    }

    get router(): Router {
        return this._router
    }

    public send<T>(res: Response, code: number, message: T): Response {
        res.type('application/json')
        return res.status(code).json(message)
    }

    public ok<T>(res: Response, message: T): Response {
        return this.send<T>(res, 200, message)
    }

    protected bindRoutes(routes: IControllerRoute[]): void {
        routes.forEach((route) => {
            const middleWare = route.middlewares?.map((m) => m.execute.bind(m))
            const handler = route.func.bind(this)
            const pipeline = middleWare ? [...middleWare, handler] : handler
            this.router[route.method](route.path, pipeline)
        })
    }
}
