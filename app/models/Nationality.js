module.exports = (sequelize, Sequelize) => {
	const Nationality = sequelize.define('Nationality', {

libelle:{
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

return Nationality;
}