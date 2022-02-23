import express, { Express } from 'express'
import { Server } from 'http'
import { IGalleryController } from '../interfaces/gallery.controller.interface'
import { GalleryController } from '../controllers/gallery.controller'

export class App {
    app: Express
    server: Server
    port: number
    galleryController: IGalleryController

    constructor() {
        this.app = express()
        this.port = 8000
        this.galleryController = new GalleryController()
    }

    public init(): void {
        this.useRoutes()
        this.server = this.app.listen(this.port)
        console.log(`[App] server is stared on port [${this.port}]`)
    }

    useRoutes(): void {
        this.app.use('/gallery', this.galleryController.router)
    }

}
