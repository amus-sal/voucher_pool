import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes"; 
const router: Router = Router();
import {VoucherController} from "../controller/voucher"
import {VoucherRepo} from "../repo/voucher"
import {CustomerRepo} from "../repo/customer"
import {OfferRepo} from "../repo/offer"


const voucherRepo = new VoucherRepo()
const customerRepo = new CustomerRepo()
const offerRepo = new OfferRepo()

const voucherController = new VoucherController(voucherRepo,customerRepo, offerRepo);


// @route   POST api/voucher/create
// @desc    create new voucher 
// @access  Public

router.post("/create",voucherController.addNewVoucher);


router.get("/list",voucherController.getVouchersByEmail);


router.put("/use",voucherController.applyVoucherCode);

  

export default router