const express=require('express');
const router=express.Router();

const auth =require('../middleware/auth');
const uploadImage=require('../middleware/image');
// controllers
const userController=require('../controller/userController');
const postController=require('../controller/postController');
const profileController=require('../controller/profileController');

// user routes
router.post('/register',userController.register);
router.post('/login',userController.login);



// post routes pass header x-access-token
router.post('/create',postController.save);
router.get('/posts',postController.fetchAll);
router.get('/show/:id',postController.show);
router.put('/update/:id',postController.update);
router.delete('/delete/:id',postController.delete);

router.post('/image',uploadImage,profileController.save);

module.exports=router;