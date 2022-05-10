module.exports = (sequelize, Sequelize) => {
	const Quality = sequelize.define('Quality', {

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

return  Quality;
}