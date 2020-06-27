import * as mongoose from 'mongoose';
import Customer from '../models/customer';
import customerInt from '../interfaces/customer';


export class CustomerRepo implements customerInt{

    async attachVoucherToCustomre(customer: mongoose.Schema.Types.ObjectId, voucher: mongoose.Schema.Types.ObjectId) {
        return await Customer.findByIdAndUpdate(customer, {"$addToSet":{"vouchers":voucher }})

    }

}

