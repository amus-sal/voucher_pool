import * as mongoose from 'mongoose';
import voucherInt from '../../interfaces/voucher'
export class VoucherRepo implements voucherInt{

    constructor(){
        console.log("Start")
    }
    public async addNewVoucher(data: JSON) {
        try {

            return {}
        } catch (error) {
            throw new Error("Error with Data")

        }
    }

    public async getVouchersByEmail(email: string) {
        try {
            return {}
        } catch (error) {
            throw new Error("Error with Data")
        }


    }

    public async applyVoucherCode(code: string, email: string) {
        try {
            return {}

        } catch (error) {
            throw new Error("Error with Data")
        }
    }


}

