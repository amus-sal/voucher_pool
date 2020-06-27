import * as mongoose from 'mongoose';
import  Offer from '../models/offer';
import { Request, Response } from 'express';



export class OfferController{

    public addNewOffer (req: Request, res: Response) {                
        let newOffer = new Offer(req.body);

        newOffer.save((err, Offer) => {
            if(err){
                res.send(err);
            }    
            res.json(Offer);
        });
    }

    public getOffers (req: Request, res: Response) {           
        let params = req.params

        Offer.find({}).populate('Offer').exec((err, Offer)=>{
            if(err){
                res.send(err);
            }    
            res.json(Offer);
        });
    }
    
}