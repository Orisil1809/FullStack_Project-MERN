const multer = require("multer");
const uuid = require("uuid");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileUpload = multer({
  limits: 500, // limit to 500KB file size
  storage: multer.diskStorage({
    // configure disk storage
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    fileName: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid("v4") + "." + ext); // Generates a random file name with the right extension.
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype]; // '!!' converts undefined or null to false and otherwise true
    let error = isValid ? null : new Error("Invalid mime type!");
    cb(error, isValid);
  },
});

module.exports = fileUpload;
