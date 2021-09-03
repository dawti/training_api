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


app.listen(port,(req,res)=>{
    console.log("App listening to port 8081");
})

