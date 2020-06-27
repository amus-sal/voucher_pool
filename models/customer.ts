import { Document, Model, model, Schema } from "mongoose";
import {VoucherInt} from "./voucher"

export interface CustomerInt extends Document {
    name: string;
    email: string;
}


const customerSchema : Schema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      index: { unique: true }
    },

  });
  
  const Customer: Model<CustomerInt> = model("Customer", customerSchema);
  
  export default Customer;