module.exports = (sequelize, Sequelize) => {
	const Film = sequelize.define('Film', {

titre:{
    type: Sequelize.STRING,
},
prix:{
    type: Sequelize.INTEGER,
},
duree:{
    type: Sequelize.STRING,
},
dateLancement:{
    type: Sequelize.DATE,
},
diffusion:{
    type: Sequelize.STRING,
},
discription:{
    type: Sequelize.STRING,
},
auteur:{
    type: Sequelize.STRING,
},
urlBA:{
    type: Sequelize.STRING,
},
UserId:{
    type: Sequelize.INTEGER,
},
QualiteId:{
    type: Sequelize.INTEGER,
}, 
NationaliteId:{
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

return Film;
}