import express from 'express'
import cors from 'cors'
import connectDB from './src/db/connect.js'
import routes from './src/routes/index.routes.js'

connectDB()
  .then(()=>{
    app.listen(process.env.PORT, () =>{
      console.log(`Server is running at port: ${process.env.PORT}`);
    })
  })
  .catch(error =>{
    console.log("MongoDb connection failed: ", error);
  })

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', routes)