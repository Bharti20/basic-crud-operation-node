const express = require('express')
const app = express()
const allData = require('./index.json')
const fs = require('fs')

app.use(express.json())

app.get('/all_data',(req, res) =>{
    res.send(allData);
});

app.get('/:id', (req,res) => {
    var id = req.params.id
    let i = 0
    while(i<allData.length) {
        if(id == allData[i].id) {
            res.send(allData[i])
        }i++
    };
});

app.post('/createData', (req,res)=>{
    var data = {
        id: allData.length + 1,
        name : req.body.name,
        class:req.body.class,
        city:req.body.city
    }
    res.send(data)
    console.log(data)
    allData.push(data)
    var stringData = JSON.stringify(allData, null, 2)
    fs.writeFileSync('index.json',stringData)
});

app.put('/updating/:id', (req,res) =>{
    var i = 0
    var myId = req.params.id
    while(i<allData.length) {
        if(allData[i]['id'] == myId){
                allData[i]['name'] = req.body.name,
                allData[i]['class'] = req.body.class,
                allData[i]['city'] = req.body.city
        }
        i++
    };
    var string = JSON.stringify(allData, null, 2)
    fs.writeFileSync('index.json',string)
    res.send(allData)
    console.log(string)
});

app.delete('/deleting/:id', (req,res) =>{
    var i = 0;
    var uniqueId = req.params.id
    while(i<allData.length) {
        if(allData[i]['id'] == uniqueId) {
            allData.splice(i, 1)
            break;
        }i++
    };
    var string = JSON.stringify(allData, null, 2)
    fs.writeFileSync('index.json',string)
    res.send(allData)
    console.log(string)
});


app.listen(4000, () =>{
    console.log('Running on server---')
});

   
// var arr = [1, 2, 1, 4,];
// let i = 0
// var removed = arr.splice(5,4);
// console.log(arr)