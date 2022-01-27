const {MongoClient} = require('mongodb')

const uri = process.env.DB_URL

const client = new MongoClient(uri)

async function getAllItems(){
	await client.connect()
	const result = await client.db('shop').collection('articles').find()
	return result.toArray()
}

module.exports = {
	getAllItems}
