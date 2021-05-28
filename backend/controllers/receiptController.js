import asyncHandler from "express-async-handler"
import Receipt from "../models/receiptModel.js"

// @desc Fetch all receipts
// @route GET /api/receipts
// @access Publuc
const getReceipts = asyncHandler(async (req, res) => {
  const receipts = await Receipt.find({})

  res.json(receipts)
})

const getReceiptsById = asyncHandler(async (req, res) => {
  const receipt = await Receipt.findById(req.params.id)

  if (receipt) {
    res.json(receipt)
  } else {
    res.status(404)
    throw new Error("Receipt not found")
  }
})

export { getReceipts, getReceiptsById }
