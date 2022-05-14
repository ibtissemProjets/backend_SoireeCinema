module.exports = (sequelize, Sequelize) => {
	const Caroussel = sequelize.define('Caroussel', {

        name:{
    type: Sequelize.STRING,
},
 
data: {
    type: Sequelize.BLOB("long"),
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

return Caroussel;
}