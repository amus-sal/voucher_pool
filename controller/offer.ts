import * as mongoose from 'mongoose';
import  Offer from '../models/offer';
import { Request, Response } from 'express';
import offerInt from '../interfaces/offer';



export class OfferController{
    offer: offerInt
    constructor( offer: offerInt ){
        this.offer = offer

    }
    async addNewOffer (req: Request, res: Response) {                

        const resuilt  =  await this.offer.addOffer(req.body)
        res.json(resuilt);
    }
    
}