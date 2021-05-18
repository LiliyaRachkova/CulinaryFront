import asyncHandler from "express-async-handler"
import Receipt from "../models/receiptModel.js"

// @desc Fetch all receipts
// @route GET /api/receipts
// @access Publuc
const getReceipts = asyncHandler(async (req, res) => {
  const receipts = await Receipt.find({})

  res.json(receipts)
})


export { getReceipts }
