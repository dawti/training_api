const express=require('express');
const teacher=require('./teacher');
const classes = require('./class');


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
// {
//     path:'/course',
//     route:course
// },
// {
//     path:'/school',
//     route:school
// }
];
    




defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;