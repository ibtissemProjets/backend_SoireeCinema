module.exports = (sequelize, Sequelize) => {
	const Category = sequelize.define('Category', {

libelle:{
    type: Sequelize.STRING,
},
checked:{
    type: Sequelize.BOOLEAN,
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

return Category;
}