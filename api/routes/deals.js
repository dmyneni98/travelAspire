import express from "express";

import { createDeal,getDeals,getDeal ,updateDeal,deleteDeal} from "../controllers/deals.js";

const router = express.Router();

router.post("/", createDeal);
//Update

router.put("/:id", updateDeal);

//delete
router.delete("/:id", deleteDeal);

//get
router.get("/:id", getDeal);

//get All
router.get("/", getDeals);




export default router