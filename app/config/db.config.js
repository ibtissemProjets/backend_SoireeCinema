const env = require('./env.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize = sequelize;
db.caroussels = require('../models/Caroussel.js')(sequelize, Sequelize);


db.imageprofiles = require('../models/ImgProfile')(sequelize, Sequelize);
db.imagecouvs = require('../models/ImgCouv')(sequelize, Sequelize);

db.users = require('../models/User.js')(sequelize, Sequelize);
db.roles = require('../models/Role.js')(sequelize, Sequelize);
db.films = require('../models/Film.js')(sequelize, Sequelize);
db.images = require('../models/image.js')(sequelize, Sequelize);
db.qualities = require('../models/Quality.js')(sequelize, Sequelize);
db.nationalites = require('../models/Nationality.js')(sequelize, Sequelize);
db.categories = require('../models/Category.js')(sequelize, Sequelize);
db.categriesfilms = require('../models/Categriesfilms.js')(sequelize, Sequelize);


//FKey: FilmId dans table imageprofiles
db.films.hasMany(db.imageprofiles, { as: "imgprofile" });
db.imageprofiles.belongsTo(db.films, {
  foreignKey: "FilmId",
  as: "film",
});
//FKey: FilmId dans table imgCouverture
db.films.hasMany(db.imagecouvs, { as: "imgcouv" });
db.imagecouvs.belongsTo(db.films, {
  foreignKey: "FilmId",
  as: "film",
});
//FKey: userId dans table films
db.users.hasMany(db.films, { as: "film" });
db.films.belongsTo(db.users, {
  foreignKey: "UserId",
  as: "user",
});

//FKey: roleId dans table user
db.roles.hasMany(db.users, { as: "users" });
db.users.belongsTo(db.roles, {
  foreignKey: "RoleId",
  as: "role",
});



//FKey: filmId dans table categriesfilms
db.films.hasMany(db.categriesfilms, { as: "film" });
db.categriesfilms.belongsTo(db.films, {
  foreignKey: "FilmId",
  as: "film",
});

//FKey: FilmId dans table images
db.films.hasMany(db.images, { as: "images" });
db.images.belongsTo(db.films, {
  foreignKey: "FilmId",
 as: "film",
});

//FKey: CategorieId dans table categriesfilms
db.categories.hasMany(db.categriesfilms, { as: "categorie" });
db.categriesfilms.belongsTo(db.categories, {
  foreignKey: "CategorieId",
  as: "categorie",
});


// //FKey: nationalityId dans table film
// db.nationalities.hasMany(db.films, { as: "film" });
// db.films.belongsTo(db.nationalities, {
//   foreignKey: "NationalityId",
//   as: "nationality",
// });

// //FKey:qualityId dans table film
// db.qualities.hasMany(db.films, { as: "film" });
// db.films.belongsTo(db.qualities, {
//   foreignKey: "QualityId",
//   as: "quality",
// });

module.exports = db;