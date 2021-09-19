const Profile=require('../models/profile');

exports.save=(req,res)=>{
 
    Profile.create({
        about:req.body.about,
        avator:req.file.path,
    }).then(result=>{
        if(result){
            res.status(200).json({
                message:'Profile created successfully',
            });
        }else{
            res.status(500).json({
                message:'Something went wrong',
            });
        }
    }).catch(error=>res.status(500).json({
        message:'Something went wrong',
    }));
}