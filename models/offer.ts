import { Document, Model, model, Schema } from "mongoose";

export interface OfferInt extends Document {
    name: string;
    fixedDiscount: string;
}


const offerSchema : Schema = new Schema({
    name: {
      type: String,
      required: true
    },
    fixedDiscount: {
      type: String,
      required: true
    }
  });
  
  const Offer: Model<OfferInt> = model("Offer", offerSchema);
  
  export default Offer;