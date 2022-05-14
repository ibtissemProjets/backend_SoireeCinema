module.exports = (sequelize, Sequelize) => {
	const image = sequelize.define('image', {

nom:{
    type: Sequelize.STRING,
},
taille:{
    type: Sequelize.INTEGER,
},
type:{
    type: Sequelize.STRING,
},
bin:{
    type: Sequelize.BLOB,
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

return image;
}