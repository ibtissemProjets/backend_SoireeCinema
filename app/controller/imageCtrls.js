var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { tables } = require('../config/db.config.js');
const await = require('await');
const images = db.images;


exports.createImg = async (req, res) => {
    
    if (!req.body.nom ) {
        return res.status(400).json({ 'message': 'nom est obligatoire' });
    }

    try {
        const result = await images.create({
            nom: req.body.nom,
        });
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

//find all images
exports.findImg = (req, res) => {
    return images.findAll()
        .then(images => {
            console.log("check")

            if (images) {
                res.status(200).json(images)


            } else {
                res.send('échec affichages images')

            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}

//delete image by id
exports.deleteImg= (req, res) => {
    const id = req.params.id;

    images.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "image supp avec succés."
                });
            } else {
                res.send({
                    message: `impossible de supprimer image ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error de supprission image ayant id=" + id
            });
        });
}
// Update image
exports.updateImg= (req, res) => {
    const id = req.params.id;

    images.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "image modifiée avec succés"
                });
            } else {
                res.send({
                    message: `impossible de modifier image ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error modification image ayant id=" + id
            });
        });
}