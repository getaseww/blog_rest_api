const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../db');
var User =require('./user'); 
const Post=sequelize.define('post',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    copyright:{
        type:DataTypes.STRING,
        allowNull:true,  
    }
});
// this.Post.belongsTo(User,{ foreignKey: 'userId' });
module.exports=Post;