module.exports = (sequelize, Sequelize) => {
	const Imagecouv = sequelize.define('Imagecouv', {

name:{
    type: Sequelize.STRING,
},
data:{
    type: Sequelize.STRING,
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

return Imagecouv;
}