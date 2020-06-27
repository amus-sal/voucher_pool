import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes"; 
const router: Router = Router();
import {CustomerController} from "../controller/customer"

const customerController = new CustomerController();

// @route   POST api/customner/create
// @desc    create new customer 
// @access  Public

router.post("/create",customerController.addNewCustomer);
  
router.get("/list/vouchers/:email",customerController.getVouchersForCustomer);

  

export default router