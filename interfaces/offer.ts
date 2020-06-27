import * as mongoose from 'mongoose';

export default interface offerInt {
    getOffer(id: mongoose.Schema.Types.ObjectId):any
    addOffer(data: JSON):any

}