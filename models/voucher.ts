import { Document, Model, model, Schema } from "mongoose";
import {CustomerInt} from "./customer"
import {OfferInt} from "./offer"

export interface VoucherInt extends Document {
    code : string;
    customer: CustomerInt;
    offer: OfferInt;
    createdAt: string;
    usedAt: string;
    expirationDate: string;
    isUsed : boolean;
}


const voucherSchema : Schema = new Schema({
    code: {
        type: String,
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
    },
    offer: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    usedAt: {
        type: Date,
        required: false
    },
    expirationDate: {
        type: Date,
        required: true
    },
    isUsed: {
        type: Boolean,
        required: false,
        default: false
    }
});
  
  const Customer: Model<VoucherInt> = model("Voucher", voucherSchema);
  

  export default Customer;