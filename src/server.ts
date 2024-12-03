import express from 'express'
const app = express()


// routing
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

export default app