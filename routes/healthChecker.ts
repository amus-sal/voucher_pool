import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes"; 
const router: Router = Router();

// @route   GET api/check
// @desc    Health Check
// @access  Public

router.get("/check", async (req, res: Response) => {
    try {
      res.status(HttpStatusCodes.OK).send();
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
});
  

export default router