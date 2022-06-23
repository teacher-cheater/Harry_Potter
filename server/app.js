import express from "express" //подключение express
import { data } from './person.js' //подключение файла
import cors from "cors" //библиотека node

const app = express()
const port = 5000

app.use(cors())
app.get('/harry potter', (req, res) => {
   res.status(200).json(data)

})


server.listen(port, () => {
   console.log(`Server listens http://${port}`)
})
