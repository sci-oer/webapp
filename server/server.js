require('dotenv').config()

const express = require('express')
const app = express()

// compression is used as a middleware and used to increase the speed of the webapp 
const compression = require('compression')
app.use(compression())

/*
app.get("/api", (req, res) =>{
    res.json({"users": ["UserOne" , "UserTwo" , "UserThree"]})
} )

app.listen(5001 , () => {console.log("Server started on 5001")} )
*/


// for the view engine and using to load a html file in the front as an ejs 
app.set('view engine' , 'ejs')
app.get('/' , (req , res) => {
    res.render('newHtml.ejs')
})

// routers , differnt routers in different router files 
const userRouter = require('./routes/user')
const { config } = require('dotenv')
app.use('/users' , userRouter)

// middleware 


//const PORT = process.env.PORT || 3001 ; 
 
app.listen(PORT , () =>{
    console.log(`Server is listening on ${process.env.PORT}`)
})