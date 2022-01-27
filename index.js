const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {getAllItems}= require('./utils/mongo.js')
const PORT = process.env.PORT || 8090

const app = express()

app.use(cors())

app.get('/', (async(req,res) => {
	const result = await getAllItems()
	console.log(result)
	res.json(result)
}))

app.listen(PORT, ()=>{console.log('Server runs on port:', PORT)})
