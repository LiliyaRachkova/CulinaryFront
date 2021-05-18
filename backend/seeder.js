import dotenv from "dotenv"

import rec from "./data/rec.js"

import Receipt from "./models/receiptModel.js"

import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Receipt.deleteMany()

    await Receipt.insertMany(rec)

    console.log("Data imported!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Receipt.deleteMany()

    console.log("Data destroyed!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
