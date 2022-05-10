module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('User', {

firstname:{
    type: Sequelize.STRING,
},
lastname:{
    type: Sequelize.STRING,
},
email:{
    type: Sequelize.STRING,
},
dateNaiss:{
    type: Sequelize.STRING,
},
password:{
    type: Sequelize.STRING,
},
username:{
    type: Sequelize.STRING,
},
ville:{
    type: Sequelize.STRING,
},
pays:{
    type: Sequelize.STRING,
},
createdAt:{
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
},
updatedAt:{
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
}
});

return User;
}