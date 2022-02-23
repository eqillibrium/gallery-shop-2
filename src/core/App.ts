import express, { Express } from 'express'
import { Server } from 'http'

export class App {
    app: Express
    server: Server
    port: number

    constructor() {
        this.app = express()
        this.port = 8000
    }

    public init(): void {
        this.server = this.app.listen(this.port)
        console.log(`[App] server is stared on port [${this.port}]`)
    }

}
