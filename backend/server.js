import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRoute.js'
import customerRouter from './routes/customerRoutes.js'
import caseRouter from './routes/caseRoutes.js'
import dotenv from 'dotenv'
import productRouter from './routes/productRoutes.js'
const app = express()
import cors from 'cors'
dotenv.config()
app.use(cors({
  origin: "*", // or put your Vercel domain: "https://your-frontend.vercel.app"
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
mongoose.connect(process.env.mongouri).then(
    console.log('connected to mongodb')
).then(
    app.listen(3000,()=>{
        console.log('server started');
    })
)

app.use(express.json())
app.use('/users',userRouter)
app.use('/customers', customerRouter)
app.use('/cases', caseRouter)
app.use('/products', productRouter)