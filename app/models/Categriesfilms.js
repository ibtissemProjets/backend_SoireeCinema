module.exports = (sequelize, Sequelize) => {
	const Categriesfilms = sequelize.define('Categriesfilms', {

        CategorieId:{
    type: Sequelize.INTEGER,
},
FilmId:{
    type: Sequelize.INTEGER,
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

return Categriesfilms;
}