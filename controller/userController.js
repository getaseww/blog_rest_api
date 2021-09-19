require('dotenv').config();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const User=require('../models/user');

exports.register=(req,res)=>{
    const {firstName,lastName,password,email}=req.body;
    // check if there is empty field
    if (!(email && password && firstName && lastName)) {
        res.status(400).json({message:'All inputs are required'});
      }
    User.findOne({
        where:{
            email:email,
        }
    }).then(result=>{
        if(result){
            res.status(409).json({
                message:'Email already Exists',
            });
        }else{
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            User.create(
                {
                    firstName:firstName,
                    lastName:lastName,
                    password:hash,
                    email:email.toLowerCase(),  
                })
                .then(data=>res.status(200).json({
                    message:'new user created'
                }))
                .catch(error=>res.status(501).json({
                    error:true,
                    error:error
                }));

                const token = jwt.sign({
                    email: email,
                }, process.env.TOKEN_KEY, function(err, token){
                    res.status(200).json({
                        message: "Authentication successful!",
                        token: token
                    });
                });

        }
    }).catch(error=>{
        res.status(500).json({
            message:'Something went wrong',
        });
    });

    
};

exports.login=(req,res)=>{
    const {email,password}=req.body;

    if(!(email && password)){
        res.status(400).json({
            message:'All fileds are required'
        });
    }
    
    const user=User.findOne({
        Where:{
            email:email,
        }
    }).then(user=>{
        if(user==null){
            res.status(401).json({
                message:'Invalid credential!',
            })
        }else{
            bcrypt.compare(password,user.password,function(err,result){
                if(result){
                    const token = jwt.sign({
                        id:user.id,
                    }, process.env.TOKEN_KEY);
                    res.header('auth-token',token).status(200).json({
                        token: token
                    });
                }else{
                    res.status(401).json({
                        data:result,
                        message:'Invalid credentials',
                    });                
                }

            });
        }
        
    }).catch(error=>{
        res.status(500).json({
            message:'Something went wrong!',
        });
    });
};