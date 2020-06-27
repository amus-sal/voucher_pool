import * as mongoose from 'mongoose';
import Voucher from '../models/voucher';
import Customer from '../models/customer';
import Offer from '../models/offer';

import generateCode from '../helpers/generateCode'
import voucherInt from './../interfaces/voucher'
export class VoucherRepo implements voucherInt{

    constructor(){
    }
    public async addNewVoucher(data: JSON) {
        try {

        let newVoucher = new Voucher(data);
          newVoucher.code = generateCode(8)

          let res =  await newVoucher.save()

            return res
        } catch (error) {
            throw new Error("Error with Data")

        }
    }

    public async getVouchersByEmail(email: string) {
        try {
            console.log("EEEEe", email)
            return await Voucher.find({}).populate({
                path: 'customer'
            }).populate('offer', 'name').exec();


        } catch (error) {
            throw new Error("Error with Data")
        }


    }

    public async applyVoucherCode(code: string, email: string) {
        try {
            let filter = {
                code: code, isUsed: false,
                expirationDate: {
                    $gte: new Date().toISOString()
                }
            }
            return await Voucher.findOneAndUpdate(filter, { isUsed: true, usedAt: new Date().toISOString() }).populate({
                path: 'customer',
                select: 'email',
                match: {
                    'customer.email': email
                }
            }).populate('offer', 'fixedDiscount').exec();


        } catch (error) {
            throw new Error("Error with Data")
        }
    }

}

