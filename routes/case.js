const express = require('express');
const router = express.Router();
const Case = require('../models/Case');


router.get('/get', async (req,res) =>{
    try{
        const test = await Case.find();
        
        res.json(test);
        console.log(test);
        console.log("mana");
    }catch(err){
        res.json({message:err});
        console.log("mana2");
    }
    console.log("mana3");
});

router.post('/', (req,res) =>{
    console.log("Connected to React");
    res.redirect("/");
})
module.exports = router;