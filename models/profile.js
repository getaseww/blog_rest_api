const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../db');
var User=require('./user');

const Profile=sequelize.define('profile',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    about:{
        type:DataTypes.TEXT,
    },
    avator:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});
// this.Profile.belongsTo(User,{ foreignKey: 'userId' });
module.exports=Profile;