const express =  require ('express')

const userRoutes = require('./routes/user')

 const app = express()
const mongoose = require("mongoose")
require('dotenv').config()

const port = process.env.PORT || 9000

 

//routes
app.get('/', (req, res)=>{
res.send('bem vindo')
})

// middwares
app.use('/api' , userRoutes)


//mongo db
mongoose
.connect(process.env.MONGODB_URI)


app.listen(port, ()=> console.log("porta tal", port))


