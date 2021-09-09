const express=require('express');
const app=express();
const port=8081;
const model = require('./models');
const routes = require ('./routes');
const cors=require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/api',routes);

model.db.sequelize.sync(/* {force:true} */).then(() => {
    console.log('Drop and Resync with { force: true }');
  });
//   app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

app.listen(port,(req,res)=>{
    console.log("App listening to port 8081");
})

