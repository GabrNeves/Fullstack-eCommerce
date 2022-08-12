import Express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import productsRouter from './routes/products'
import usersRouter from './routes/users'
import cartsRouter from './routes/carts'

dotenv.config()
const app = Express()

if (process.env.DATABASE_URL) {
  mongoose.connect(process.env.DATABASE_URL, {dbName: 'fullstack-assignment'})
}

const db = mongoose.connection
db.on('error', (error) => { console.log(error) })
db.once('open', () => { console.log('Connected to database') })


app.use(Express.json())
app.use(cors())

//routes
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/carts', cartsRouter)

//listen
app.listen(9590, () => console.log('Server started...'))

