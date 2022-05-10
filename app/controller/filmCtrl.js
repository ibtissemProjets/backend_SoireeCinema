var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { tables } = require('../config/db.config.js');
const await = require('await');
const Film = require('../models/Film.js');
const film = db.films;
const User = db.users;
const categorfilms = db.categriesfilms;

exports.CreateFilm = async (req, res) => {
    console.log("containercontainer1",req.body)
   var container=[]
    
    try {
      
        const result = await film.create({
           titre: req.body.titre,
           prix: req.body.prix,
           discription:req.body.discription,
           dateLancement:req.body.dateLancement,
           diffusion:req.body.diffusion,
           auteur:req.body.auteur,
           NationaliteId:req.body.NationaliteId,
           UserId:req.body.UserId,
           QualiteId:req.body.qualite,
           duree:req.body.duree
        });

        res.status(201).json(result);

        
        for (i = 0; i < req.body.dataCat.length; i++) {
            var dataFinal ={
                CategorieId : req.body.dataCat[i],
                FilmId : result.id
            }
            container.push(dataFinal);
            
        }

        try {
            const result2 = await categorfilms.bulkCreate(container);
            res.status(201).json(result2);
        } catch (err) {
            console.error(err);
        }
        console.log("containercontainer2",container)
    } catch (err) {
        console.error(err);
    }
}

//find allfilm
exports.findFilm = (req, res) => {
    return film.findAll()
        .then(films => {

            if (films) {
                res.status(200).json(films)


            } else {
                res.send('films deos not exist')

            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}


//find film by userID
exports.findFilmsById = (req, res) => {
    const UserId = req.params.id;

    return User.findByPk(UserId, { include: ["film"] })
        .then(data => {

            if (data) {


                res.send(data)

            } else {
                res.send('data deos not exist')

            }
        }).catch(err => {
            console.log(err)
            res.send('errror: ' + err)
        })
}

//delete film
exports.deleteFilm = (req, res) => {
    const id = req.params.id;

    film.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "film supprimé avec succés."
                });
            } else {
                res.send({
                    message: `impossible de supprimer le film ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error de supprission film ayant id=" + id
            });
        });
}