require('dotenv').config();
const express=require('express');
const sequelize=require('./db');
const router=require('./routes/route');
const cors=require('cors');
const app=express();

const Post=require('./models/post');
const Profile=require('./models/profile');
const User=require('./models/user');

const port = process.env.PORT||3000;
app.use(express.json());
app.use(cors());
app.use('/api',router);

User.hasOne(Profile);
User.hasMany(Post);
Post.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
Profile.belongsTo(User,{constraints:true,onDelete:'CASCADE'});

sequelize.sync().then(result=>{
    app.listen(port,()=>{
        console.log('app started at port:',port);
    });
}).catch(error=>{
    console.log(error);
});



//{force:true}