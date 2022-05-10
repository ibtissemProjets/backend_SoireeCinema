var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { tables } = require('../config/db.config.js');
const await = require('await');
const nationality = db.nationalites;


exports.createNationality = async (req, res) => {
    
    if (!req.body.libelle ) {
        return res.status(400).json({ 'message': 'libelle est obligatoire' });
    }

    try {
        const result = await nationality.create({
            libelle: req.body.libelle,
        });
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

//find all nationalities
exports.findNationality = (req, res) => {
    return nationality.findAll()
        .then(nationalities => {

            if (nationalities ) {
                res.status(200).json(nationalities )


            } else {
                res.send('échec affichages nationalities')

            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}

//delete nationality by id
exports.deleteNationality = (req, res) => {
    const id = req.params.id;

    nationality.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "nationalité supp avec succés."
                });
            } else {
                res.send({
                    message: `impossible de supprimer la nationalité ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error de supprission de la nationalité ayant id=" + id
            });
        });
}


// Update nationaliye
exports.updateNat = (req, res) => {
    const id = req.params.id;

    nationality.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "nationalité modifié avec succés."
                });
            } else {
                res.send({
                    message: `impossible de modifier nationalité ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error mofification nationalité ayant id=" + id
            });
        });
}