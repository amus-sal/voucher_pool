import Voucher from '../models/voucher';
import { Request, Response } from 'express';
import HttpStatusCodes from "http-status-codes"; 
import  voucherInt from './../interfaces/voucher'
import   customerInt from './../interfaces/customer'
import   offerInt from './../interfaces/offer'

export class VoucherController {
    voucher: voucherInt
    customer: customerInt
    offer: offerInt
    constructor(voucher: voucherInt, customer: customerInt, offer: offerInt ){
        this.voucher = voucher
        this.customer = customer
        this.offer = offer

    }

    addNewVoucher = async (req: Request, res: Response)=> {

        let offer = await this.offer.getOffer(req.body.offer)
        if (! offer){
            res.status(HttpStatusCodes.NOT_ACCEPTABLE).send()
        }
        req.body.offer = offer
        req.body.createdAt = new Date().toISOString()
        let result = await this.voucher.addNewVoucher(req.body);
        await this.customer.attachVoucherToCustomre(result.customer, result.voucher)
        res.status(HttpStatusCodes.CREATED).json(result);
    }

    getVouchersByEmail = async(req: Request, res: Response)=> {
        try {
            let params = req.query
            const voucher = await this.voucher.getVouchersByEmail(String(params.email))
            res.status(HttpStatusCodes.OK).json(voucher);

        } catch (error) {
            res.send(error);

        }


    }

    applyVoucherCode =  async (req: Request, res: Response) =>{
        try {
            let body = req.body;
            const result = await this.voucher.applyVoucherCode(body.code, body.email)

            if (result.offer) {
                res.status(HttpStatusCodes.OK).json({ "FixedPercentage": result.offer.fixedDiscount });
            }
            res.status(HttpStatusCodes.NOT_ACCEPTABLE).send()

        } catch (error) {
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);

        }
    }
}

