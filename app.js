// const express = require('express')
// const app = express()
// const jsonData = require('./index.json')

// app.get('/all_data',(req, res) =>{
//     res.send(jsonData);
// });

// app.get('/:id', (req,res) => {
//     var id = req.params.id
//     let i = 0
//     while(i<jsonData.length) {
//         if(id == jsonData[i].id) {
//             res.send(jsonData[i])
//         }i++
//     };
// });

// var newData = {
//     "id" : 1,
//     "name" : "Ravina",
//     "class" : "15",
//     "city" : 
// }

// app.listen(4000, () =>{
//     console.log('Running on server---')
// });

var obj = {'a':1, 'b': 2}
var x;
for(x of obj){
    console.log(x)
}