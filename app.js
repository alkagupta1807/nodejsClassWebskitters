const express = require('express')
const ejs=require('ejs')
const app = express()



//setup ejs
app.set('view engine','ejs');
app.set('views','views')


const webRoute=require('./router/web.router')
app.use(webRoute)



const port=1234
app.listen(port,()=>{
    console.log(`server is on port http://localhost:${port}`);
})