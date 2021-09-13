const express=require('express');
const teacher=require('./teacher');
const classes = require('./class');
const school = require('./school');
const course = require('./course');
const student = require('./student');
const login = require('./login');
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
    path:'/student',
    route:student
},
{
    path:'/user',
    route:login
},
{
    path:'/course',
    route:course
}];
    




defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;