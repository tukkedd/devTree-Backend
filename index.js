
import express from 'express'
const app = express()


// routing
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`server lisening on port: `, port);

})
