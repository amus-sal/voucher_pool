import * as mongoose from 'mongoose';

export default interface customerInt {
    attachVoucherToCustomre(customer: mongoose.Schema.Types.ObjectId, voucher: mongoose.Schema.Types.ObjectId):any
    addNewCustomer(data: JSON):any
    getVouchersForCustomer(email: string): any

}