const express = require('express')
const app = express()
const cors = require('cors');

const PORT = 7000
app.use(express.json())

app.use(cors())
const employee= [
    {assSur:[1,2,7], name:'Employee 1', eid:1}, 
    {assSur:[3,4,5], name:'Employee 2', eid:2}, 
    {assSur:[], name:'Employee 3', eid:3},]

const surveys= [
        {sid:1, name:'survey 1'}, 
        {sid:2, name:'survey 2'}, 
        {sid:3, name:'survey 3'},
        {sid:4, name:'survey 4'},
        {sid:5, name:'survey 5'},
        {sid:6, name:'survey 6'},
        {sid:7, name:'survey 7'},
        {sid:8, name:'man 8'}]

app.get('/employees', (req,res) =>{

    res.send(employee)
})

app.get('/surveys', (req,res) =>{

    res.send(surveys)
})

app.post('/update', (req,res) =>{
    res.send(req.body)
    console.log(req.body)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`) )