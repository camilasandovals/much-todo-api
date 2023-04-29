import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { addNewItem, getAllitems, deleteItem, updateItem } from './src/items.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post("/signup", signup)
// app.post("/signup", signup) how would it be for login


app.post("/items", addNewItem)
app.get("/items", getAllitems)
app.delete("/items/:id", deleteItem)
app.patch("/items/:id", updateItem)

export const api = functions.https.onRequest(app)
