import { Request, Response } from 'express';
import customerInt from '../interfaces/customer';



export class CustomerController{
    customer: customerInt
    constructor( customer: customerInt ){
        this.customer = customer

    }
    addNewCustomer = async  (req: Request, res: Response) =>{                

        const resuilt  =  await this.customer.addNewCustomer(req.body)
        res.json(resuilt);

    }

    getVouchersForCustomer = async (req: Request, res: Response)=> {           
        let result = await this.customer.getVouchersForCustomer(req.params.email)
        res.send(result)
    }
    
}