const cors = require('cors');
const express = require('express');
const upload = require("../middleware/upload");
const uploadprofile = require("../middleware/uploadprofile");
const uploadFileCouverture = require("../middleware/uploadCouv")
module.exports = function (app) {
    const auth = require('../controller/authentification.js');
    const filmCtrls = require('../controller/filmCtrl');
    const userCtrls = require('../controller/userCtrl.js');
    const categoryCtrls = require('../controller/categoryCtrl.js');
    const nationalityCtrls = require('../controller/nationalityCtrl.js');
    const qualityCtrls = require('../controller/qualityCtrl.js');
    const imageCtrls = require('../controller/imageCtrls.js');
    const carousselCtrls = require('../controller/carousselCtrl');
    const imgProfile = require('../controller/profileImgCtrl');
    const imgCouve = require('../controller/couvertureImgCtrl.js');

    app.use(cors());
    app.options('*', cors());
 
    //authentification
    app.post('/users/login', auth.login);
    app.post('/users/register', auth.register);
    app.get('/users/profile', auth.profile);
    // app.post("/api/auth/check", auth.checkUser);

    //gestion films
    app.post('/admin/AddFilm', filmCtrls.CreateFilm);
    app.get('/admin/getFilms', filmCtrls.findFilm);
    app.get('/admin/filmbyid/:id', filmCtrls.findFilmsById);
    app.delete('/admin/DeleteFilmById/:id', filmCtrls.deleteFilm);
    
    //gestion users
    app.get('/admin/getUsers', userCtrls.findUser);
    app.delete('/admin/DeleteUserById/:id', userCtrls.deleteUser);

    //gestion categories
    app.post('/admin/AddCategories', categoryCtrls.createCategory);
    app.get('/admin/getCategories', categoryCtrls.findCategory);
    app.delete('/admin/DeleteCategoryById/:id', categoryCtrls.deleteCategory);
    app.put('/admin/UpdateCatgById/:id', categoryCtrls.updateCat);

    //gestion nationalities
    app.post('/admin/AddNationalities', nationalityCtrls.createNationality);
    app.get('/admin/getNationalities', nationalityCtrls.findNationality);
    app.delete('/admin/DeleteNationalityById/:id', nationalityCtrls.deleteNationality);
    app.put('/admin/UpdateNationalityById/:id', nationalityCtrls.updateNat);
    
    //gestion qualities
    app.post('/admin/AddQualities', qualityCtrls.createQuality);
    app.get('/admin/getQualities', qualityCtrls.findQuality);
    app.delete('/admin/DeleteQualityById/:id', qualityCtrls.deleteQuality);
    app.put('/admin/UpdateQltById/:id', qualityCtrls.updateQlt);

    //catgFilm
    app.get('/admin/catfilmID/:id', categoryCtrls.findCatFilmsById);

    //gestion images
    app.post('/admin/AddImage', imageCtrls.createImg);
    app.get('/admin/getImage', imageCtrls.findImg);
    app.delete('/admin/DeleteImgById/:id', imageCtrls.deleteImg);
    app.put('/admin/UpdateImgById/:id', imageCtrls.updateImg);
    
    //caroussel
    app.post("/upload", upload.single("name"), carousselCtrls.uploadFiles);
    app.get("/getPhotoCarousssel", carousselCtrls.getArticle);

   //ProfileImg
   app.post("/uploadProfileImg", uploadprofile.single("name"), imgProfile.uploadFiles);
    
   //CouvertureImg
    app.post("/uploadCouvertureImg", uploadFileCouverture.single("name"), imgCouve.uploadFiles);
 
}