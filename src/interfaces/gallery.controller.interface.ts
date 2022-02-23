import { NextFunction, Request, Response, Router } from 'express'

export interface IGalleryController {
    router: Router
    index:(req: Request, res: Response, next: NextFunction) =>void
}
