import * as express from 'express'
import BaseRoutes = require('./config/routes/base/BaseRoutes')

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', new BaseRoutes().routes)
  }
}

export default new App().express
