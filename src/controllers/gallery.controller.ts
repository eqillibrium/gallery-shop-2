import { NextFunction, Request, Response } from 'express'
import { IGalleryController } from '../interfaces/gallery.controller.interface'
import { BaseController } from './base.controller'
import { IControllerRoute } from '../interfaces/route.interface'

export class GalleryController extends BaseController implements IGalleryController {

    constructor() {
        super()
        this.bindRoutes([
            {
                path: '/',
                method: 'get',
                func: this.index,
            }
        ])
    }

    protected bindRoutes(routes: IControllerRoute[]): void {
        super.bindRoutes(routes)
    }

    index(req: Request, res: Response, next: NextFunction): void {
        this.ok(res,'Hello from gallery')
    }
}
