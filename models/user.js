const {Sequelize,DataTypes} =require('sequelize');
const sequelize=require('../db');
var Post=require('./post');
var Profile=require('./profile');

const User=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true,
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    
})
// this.User.hasOne(Profile);
// this.User.hasMany(Post);
module.exports=User;