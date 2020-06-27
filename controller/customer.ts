import * as mongoose from 'mongoose';
import  Customer from '../models/customer';
import { Request, Response } from 'express';



export class CustomerController{

    public addNewCustomer (req: Request, res: Response) {                
        let newCustomer = new Customer(req.body);

        newCustomer.save((err, Customer) => {
            if(err){
                res.send(err);
            }    
            res.json(Customer);
        });
    }

    async  getVouchersForCustomer (req: Request, res: Response) {           
        let params = req.params
        console.log( req.params.email)
        let result = await Customer.aggregate([

            {
                "$lookup":{
                    "from": "Voucher",
                    "localField": "vouchers",
                    "foreignField": "_id",
                    "as": "vouchers"
                }
            }
        ]).exec();
        res.send(result)
    }
    
}