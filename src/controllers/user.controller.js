const express= require("express")
const logger= require("../logger.js/logger")
const router= express.Router()
const Users= require("../models/user.model")

router.post("/",async(req , res)=>{
    
    try{
        const tests= await Users.create(req.body);

      return  res.status(201).send(tests)
    }
    catch (err){

        logger.error(err)
    }
})


router.get("/",async(req , res)=>{
    try{
        const test= await Users.find({}).lean().exec();
       return res.status(200).send(test)
    }
    catch (err){
        logger.error(err)
    }
})

// find by id---------------------------
router.get("/:id",async(req , res)=>{
    try{
        const test= await Users.findById(req.params.id).lean().exec();
       return res.status(200).send(test)
    }
    catch (err){
        logger.error(err)
    }
})


// to change married status & age-----------------
router.patch("/:id",async(req , res)=>{
    try{
        const test= await Users.findById(req.params.id)
       
        test.age=req.body.age
       
        test.married=req.body.married
      
        const change1= await test.save()
         res.json(change1)
    }
    catch (err){
        logger.error(err)
    }
})




// to delete the data by id-------------------------

router.delete("/:id",async(req , res)=>{
    try{
        const test= await Users.findById(req.params.id)
        // test.age=req.body.age
        const change2= await test.remove()
         res.json(change2)
    }
    catch (err){
        logger.error(err)
    }
})


// pagination ----------------------------------
// router.get("/",async(req , res)=>{
//     try{
//         let page= req.query.page
//         let limit= req.query.limit

//         let artical= await Test.find().paginate({page:page,limit:limit}).exec();
//         res.json(artical)
//     }
//     catch (err){
//         console.log(err)
//     }
// })

// quarry to find the data by name------------------

// router.get("/$search?q=",async(req , res)=>{
//     try{
        
//         const search = req.query.name
//         console.log(search)
//         const test= await Test.findOne({name:search}).lean().exec();
       
//         return res.status(200).send(test)
//     }
//     catch (err){
//         console.log(err)
//     }
// })




module.exports=router