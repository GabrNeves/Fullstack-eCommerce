import Express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import productsRouter from './routers/products'
import usersRouter from './routers/users'
import cartsRouter from './routers/carts'
import passport from 'passport'
import { googleStrategy } from './config/passport'

dotenv.config()
const app = Express()

if (process.env.DATABASE_URL) {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true , dbName: 'fullstack-assignment', useUnifiedTopology: true} )
}

const db = mongoose.connection
db.on('error', (error) => { console.log(error) })
db.once('open', () => { console.log('Connected to database') })

app.use(Express.json())
app.use(cors())
app.use(passport.initialize())
passport.use(googleStrategy)

//routes
app.use('/products', productsRouter)
app.use('/users', usersRouter)
// app.use('/carts', cartsRouter)

//listen
app.listen(9590, () => console.log('Server started...'))

