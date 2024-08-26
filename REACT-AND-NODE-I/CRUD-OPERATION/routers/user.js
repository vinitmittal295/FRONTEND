const express=require("express")
const router=express.Router()
const userController=require('../controllers/user')



router.post('/',userController.CreateUser)
router.get('/',userController.getAlluser)
router.get('/:id', userController.getSingleUser)
router.patch('/asd', userController.updateUser)
router.post('/signup',userController.userSignUp)

module.exports=router;