const Post=require('../models/post');

exports.save=(req,res)=>{
    const {title,content,copyright}=req.body;
    if(!(title && content)){
        res.status(400).json({
            message:'All fields are required',
        });
    }

    Post.create({
        title:title,
        content:content,
        copyright:copyright,
    })
    .then(data=>res.status(200).json({
        message:'post created successfully.'
    }))
    .catch(error=>res.json({
        error:true,
        error:error,
    }));

};

// get all posts

exports.fetchAll=(req,res)=>{
    Post.findAll()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(error=>{
        res.status(500).json({
            message:'Something went wrong',
        });
    });
};

// show single post
exports.show=(req,res)=>{
    const id=req.params.id;
    Post.findOne({
        where:{
            id:id,
        }
    }).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(500).json({
                message:'Something went wrong',
            });
        }
    }).catch(error=>{
        res.status(500).json({
            message:'Something went wrong',
        });
    });
};
// edit post
exports.edit=(req,res)=>{
    const id=req.params.id;
    Post.findOne({
        where:{
            id:id,
        }
    }).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(500).json({
                message:'Something went wrong',
            });
        }
    }).catch(error=>{
        res.status(500).json({
            message:'Something went wrong',
        });
    });
};
// update post
exports.update=(req,res)=>{
    const id=req.params.id;
    const {title,content}=req.body;
    if(!(title && content)){
        res.status(400).json({
            message:'All fields are required',
        });
    }

    Post.update({
        title:title,
        content:content,
    },
    {
        where:{
            id:id,
        }
    }).then(res.status(200).json({
        message:'Updated successfuly',
    })).catch(error=>{
        res.status(500).json({
            message:'Something went worng',
        });
    });
};


// delete post
exports.delete=(req,res)=>{
    const id=req.params.id;

    Post.destroy({
        where:{
            id:id,
        }
    }).then(result=>{
        res.status(200).json({
            message:"post delete successfully",
        });
    }).catch(error=>{
        res.status(500).json({
            message:'Something went wrong',
        });
    });

    
};