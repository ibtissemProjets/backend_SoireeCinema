const db = require('../config/db.config.js');
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../config/keys');

const bcrypt = require("bcrypt");
const { users } = require('../config/db.config.js');
let nodemailer = require('nodemailer');
// const common_methods = require('../helpers/common_methods')
process.env.SECRET_KEY = 'secret'
const User = db.users;
const Imgcouves = db.imagecouvs
const path = require("path");
const fs = require("fs");

//ajout catégorie
const getArticle = async (req, res) => {
    Imgcouves.findAll({})
        .then(image => {
            res.send({ success: true, data: image })
        })
        .catch(err => {
            console.log('in error :: /api/getArticle')
        })
}

const uploadFiles = async (req, res) => {
    try {
      console.log(req.file,__basedir);
  
      if (req.file == undefined) {
        return res.send(`You must select a file.`);
      }
      Imgcouves.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(
          __basedir + "/uploads/couverture/" + req.file.filename
        ),
      }).then((image) => {
        fs.writeFileSync(
          __basedir + "/tmp/couverture/" + image.name,
          image.data
        );
  
     

        return  res.status(201).json(`File has been uploaded.`);
      });
    } catch (error) {
      console.log(error);
      return res.send(`Error when trying upload images: ${error}`);
    }
  };
   

//   const home = (req, res) => {
//     return res.sendFile(path.join(`${__dirname}/../views/index.html`));
//   };
  module.exports = {
    uploadFiles,
    getArticle,
    
  };
