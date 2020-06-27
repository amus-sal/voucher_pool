import * as express from 'express'
import cors from 'cors'
import healthChecker from './healthChecker'
import customer from './customer'
import offer from './offer'
import voucher from './voucher'


class Router {

    constructor(server: express.Express) {
        const router = express.Router()

        router.options('*', cors());

        server.use('/', healthChecker)
        server.use('/customer', customer)
        server.use('/offer', offer)
        server.use('/voucher', voucher)


    }
}

export default Router;