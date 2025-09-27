import express from "express"
import cors from "cors"


//App config

const app = express()
const port = 4000

//Middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})