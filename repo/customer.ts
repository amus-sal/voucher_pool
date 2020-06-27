import * as mongoose from 'mongoose';
import Customer from '../models/customer';
import customerInt from '../interfaces/customer';


export class CustomerRepo implements customerInt{
    
    async  getVouchersForCustomer(email: string) {           
        let result = await Customer.aggregate([

            {
                "$lookup":{
                    "from": "Voucher",
                    "localField": "vouchers",
                    "foreignField": "_id",
                    "as": "vouchers"
                }
            },
            
            {
                "$match":{
                    "email": email
                }
            }
        ]).exec();
        return (result)
    }
    async addNewCustomer(data: JSON) {
        let newCustomer = new Customer(data);

        
        return await newCustomer.save();
    }

    async attachVoucherToCustomre(customer: mongoose.Schema.Types.ObjectId, voucher: mongoose.Schema.Types.ObjectId) {
        return await Customer.findByIdAndUpdate(customer, {"$addToSet":{"vouchers":voucher }})

    }

}

