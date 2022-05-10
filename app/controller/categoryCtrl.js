var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { tables } = require('../config/db.config.js');
const await = require('await');
const category = db.categories;
const Film = db.films;
const FilmCate = db.categriesfilms;

//ajout catégorie
exports.createCategory = async (req, res) => {
    
    if (!req.body.libelle ) {
        return res.status(400).json({ 'message': 'libelle est obligatoire' });
    }

    try {
        const result = await category.create({
            libelle: req.body.libelle,
        });
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

//find all categories
exports.findCategory = (req, res) => {
    return category.findAll()
        .then(categories => {

            if (categories) {
                res.status(200).json(categories)


            } else {
                res.send('échec affichages catégories')

            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}

//delete 1 category by id
exports.deleteCategory = (req, res) => {
    const id = req.params.id;

    category.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "catégorie supp avec succés."
                });
            } else {
                res.send({
                    message: `impossible de supprimer la catégorie ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error de supprission de la catégorie ayant id=" + id
            });
        });
}

//afficher categories par 1 id d'un film
exports.findCatFilmsById = (req, res) => {
    const filmid = req.params.id;

    return FilmCate.findAll( { include: ["film" ,"categorie"]  , where: { FilmId: filmid}})
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

// Update categorie
exports.updateCat = (req, res) => {
    const id = req.params.id;

    category.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "catégorie modifié avec succés."
                });
            } else {
                res.send({
                    message: `impossible de modifier catégorie ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error mofification catégorie ayant id=" + id
            });
        });
}