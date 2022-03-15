const express = require('express')
const app = express()
const lists = require('./routes/rlists')
const connectDB = require('./db/connect')
require('dotenv').config()
const errorHandlerMiddleware = require('./middleware/error-handler')



app.use(express.static('./public'))
app.use(express.json())



//routes
app.use('api/v2/lists',lists)

app.use(errorHandlerMiddleware)

const port = 3000

const start = async () => {
try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`listening at ${port}...`))
} catch (error) {
    console.log(error)
}
}

start()

//app.get('api/v1)- get all listings (/list)
//app.post('api/v1)- create a new listing (/create)
//app.post('api/v1)- enter a city name (/)
//app.post('api/v1')- sign up, login (/signup) , (/login)


