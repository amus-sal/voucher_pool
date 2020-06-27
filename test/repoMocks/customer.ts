import * as mongoose from 'mongoose';
import customerInt from '../../interfaces/customer';


export class CustomerMock implements customerInt{

    async attachVoucherToCustomre(customer: mongoose.Schema.Types.ObjectId, voucher: mongoose.Schema.Types.ObjectId) {
        return {}

    }

}

