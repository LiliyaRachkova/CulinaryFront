import express from "express"

import {
  getReceipts
} from "../controllers/receiptController.js"

const router = express.Router()

router.route("/").get(getReceipts)

export default router
