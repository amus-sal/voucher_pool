import { Router, Response } from "express";
const router: Router = Router();
import {OfferController} from "../controller/offer"
import {OfferRepo} from "../repo/offer"
const offerRepo = new OfferRepo()

const offerController = new OfferController(offerRepo);
// @route   POST api/offer/create
// @desc    create new offer 
// @access  Public

router.post("/create", offerController.addNewOffer);
  

  

export default router