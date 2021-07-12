const express = require('express')
const app = express()
const jsonData = require('./index.json')
const fs = require('fs')
const { stringify } = require('querystring')


app.use(express.json())

app.get('/all_data',(req, res) =>{
    res.send(jsonData);
});

app.get('/:id', (req,res) => {
    var id = req.params.id
    let i = 0
    while(i<jsonData.length) {
        if(id == jsonData[i].id) {
            res.send(jsonData[i])
        }i++
    };
});

app.post('/createData', (req,res)=>{
    var data = {
        id: jsonData.length + 1,
        name : req.body.name,
        class:req.body.class,
        city:req.body.city
    }
    res.send(data)
    console.log(data)
    jsonData.push(data)
    var stringData = JSON.stringify(jsonData, null, 2)
    fs.writeFileSync('index.json',stringData)
});
app.listen(4000, () =>{
    console.log('Running on server---')
});

