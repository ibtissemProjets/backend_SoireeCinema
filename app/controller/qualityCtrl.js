var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { tables } = require('../config/db.config.js');
const await = require('await');
const quality = db.qualities;


exports.createQuality = async (req, res) => {
    
    if (!req.body.libelle ) {
        return res.status(400).json({ 'message': 'libelle est obligatoire' });
    }

    try {
        const result = await quality.create({
            libelle: req.body.libelle,
        });
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

//find all qualities
exports.findQuality = (req, res) => {
    return quality.findAll()
        .then(qualities => {
            console.log("check")

            if (qualities) {
                res.status(200).json(qualities)


            } else {
                res.send('échec affichages qualities')

            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}

//delete quality by id
exports.deleteQuality = (req, res) => {
    const id = req.params.id;

    quality.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "qualité supp avec succés."
                });
            } else {
                res.send({
                    message: `impossible de supprimer la qualité ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error de supprission de qualité ayant id=" + id
            });
        });
}
// Update quality
exports.updateQlt = (req, res) => {
    const id = req.params.id;

    quality.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "qualité modifiée avec succés"
                });
            } else {
                res.send({
                    message: `impossible de modifier la qualité ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error modification qualité ayant id=" + id
            });
        });
}