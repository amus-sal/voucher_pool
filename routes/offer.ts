import { Router, Response } from "express";
const router: Router = Router();
import {OfferController} from "../controller/offer"
const offerController = new OfferController();
// @route   POST api/offer/create
// @desc    create new offer 
// @access  Public

router.post("/create", offerController.addNewOffer);
  

  

export default router