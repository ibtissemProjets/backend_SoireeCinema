module.exports = (sequelize, Sequelize) => {
	const Imageprofile = sequelize.define('Imageprofile', {

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

return Imageprofile;
}