import express from 'express'
import mongoose from 'mongoose'



const dataSchema = new mongoose.Schema({
  amount: Number,
  base: String,
  symbols: String,
  currency: String
},
{ timestamps: true}
)

const Data = mongoose.model("Data", dataSchema)

export default Data