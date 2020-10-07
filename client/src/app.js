const express =  require('express')
const path =  require('path')
const hbs = require('hbs')

const app = express()
const PORT = process.env.PORT || 3000

//Define path for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`)
})