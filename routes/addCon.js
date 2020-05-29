const express=require('express')
const router =express.Router()
const contact=require('../models/addContact')

//create a new contact
router.post('/add', async (req,res)=>{
    const addCon=new contact({
        name:req.body.name,
        DOB:req.body.DOB,
        phone:req.body.phone,
        email:req.body.email

    })
    try{
        const newContact=await addCon.save()
        res.redirect(`index`)
    }
    catch{

        res.render('/addContact',{
            errorMessage:'Error Adding new contact'
        })
    }
})
module.exports=router