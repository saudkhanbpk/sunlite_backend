import express from 'express'
import dotenv from 'dotenv'
import ConnectionDB from './config/db.js';
import MoversRoute from './routes/movers-route.js'
import cors from 'cors';
dotenv.config()
const app = express()
const port = process.env.PORT;
app.use(express.json());
app.use(cors())
ConnectionDB();
app.use('/api', MoversRoute)

app.listen(port,() => {
console.log(`server is runinig on port ${port}!`)
})