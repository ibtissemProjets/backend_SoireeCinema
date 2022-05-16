const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/couverture/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-soireefilm-Couverture-${file.originalname}`);
  },
});

var uploadFileCouverture = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFileCouverture;
 