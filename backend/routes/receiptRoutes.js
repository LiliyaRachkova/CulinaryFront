import express from "express"

import {
  getReceipts,
  getReceiptsById
} from "../controllers/receiptController.js"

const router = express.Router()

router.route("/").get(getReceipts)
router.route("/:id").get(getReceiptsById)

export default router
