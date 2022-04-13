const express= require("express")
const router= express.Router()
const Test= require("../models/test.model")

router.post("/",async(req , res)=>{
    
    try{
        const tests= await Test.create(req.body);

      return  res.status(201).send(tests)
    }
    catch (err){

        console.log(err)
    }
})


router.get("/",async(req , res)=>{
    try{
        const test= await Test.find({}).lean().exec();
       return res.status(200).send(test)
    }
    catch (err){
        console.log(err)
    }
})

// find by id---------------------------
router.get("/:id",async(req , res)=>{
    try{
        const test= await Test.findById(req.params.id).lean().exec();
       return res.status(200).send(test)
    }
    catch (err){
        console.log(err)
    }
})


// to change married status & age-----------------
router.patch("/:id",async(req , res)=>{
    try{
        const test= await Test.findById(req.params.id)
       
        test.age=req.body.age
       
        test.married=req.body.married
      
        const change1= await test.save()
         res.json(change1)
    }
    catch (err){
        console.log(err)
    }
})

// quarry to find the data by name------------------

router.get("/?name",async(req , res)=>{
    try{
        const search = req.test.name
        const test= await Test.findOne({$text:search}).lean().exec();
        console.log("searched")
        return res.status(200).send(test)
    }
    catch (err){
        console.log(err)
    }
})

// to delete the data by id-------------------------

router.delete("/:id",async(req , res)=>{
    try{
        const test= await Test.findById(req.params.id)
        // test.age=req.body.age
        const change2= await test.remove()
         res.json(change2)
    }
    catch (err){
        console.log(err)
    }
})


// pagination ----------------------------------
router.get("/",async(req , res)=>{
    try{
        let page= req.query.page
        let limit= req.query.limit

        let artical= await Test.find().paginate({page:page,limit:limit}).exec();
        res.json(artical)
    }
    catch (err){
        console.log(err)
    }
})






module.exports=router