import mongoose from "mongoose"

const receiptSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  composition: {
    type: Array,
  },
  instruction: {
      type: String,
  },
  photo: {
      type: String,
  },
  composition_inter: {
      type: Array,
  }
})

const Receipt = mongoose.model("Receipt", receiptSchema)

export default Receipt
