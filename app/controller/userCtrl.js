var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { tables } = require('../config/db.config.js');
const await = require('await');
const user = db.users;

exports.createUser = async (req, res) => {
    
    if (!req.body.firstname ) {
        return res.status(400).json({ 'message': 'prenom est obligatoire' });
    }

    try {
      
        const result = await user.create({
           firstname: req.body.titre,
           lastname: req.body.prix,
           dateNaiss:req.body.discription,
           email:req.body.dateLancement,
           password:req.body.diffusion,
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

//find allUsers
exports.findUser = (req, res) => {
    return user.findAll(  {where: {
        RoleId :2
    }})
        .then(users => {
            if (users) {
                res.status(200).json(users)
            } else {
                res.send('échec affichages utilisateurs')
            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}

//delete user by id
exports.deleteUser= (req, res) => {
    const id = req.params.id;

    user.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "utilisateur supp avec succés."
                });
            } else {
                res.send({
                    message: `impossible de supprimer l'utilisateur ayant id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error de supprission de l'utilisateur ayant id=" + id
            });
        });
}
