const express=require('express');
const teacher=require('./teacher');
const classes = require('./class');
const school = require('./school');
const course = require('./course');
const router=express.Router();

const defaultRoutes=[
{
    path:'/teacher',
    route:teacher
},

{
    path:'/class',
    route:classes
},
{
    path:'/school',
    route:school
},
{
    path:'/course',
    route:course
}];
    




defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;