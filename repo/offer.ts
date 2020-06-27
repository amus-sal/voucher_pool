import * as mongoose from 'mongoose';
import Offer from '../models/offer';
import offerInt from '../interfaces/offer';


export class OfferRepo implements offerInt{
    async addOffer(data: JSON) {
            let newOffer = new Offer(data);
    
            
            return await newOffer.save();
  }
    async getOffer(id: mongoose.Schema.Types.ObjectId) {
        return await Offer.findById(id)
    }
}

