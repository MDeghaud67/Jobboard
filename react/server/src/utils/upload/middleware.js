
const multer = require("multer");
const uuid = require("uuid");
const jimp = require("jimp");
const fs = require("fs");
const path = require("path");
const imagesPath = path.resolve("public/images") + path.sep;


const PictureUpload = () => {
    const multerOptions = {
        storage: multer.memoryStorage(),
        fileFilter: (req, file, next) => {
            const match = ["image/png", "image/jpeg"];
            if (match.indexOf(file.mimetype) === -1) {
                next({ message: { files: 'That file type isn\'t allowed' } }, false);
            } else {
                next(null, true)
            }
        }
    }
    return multer(multerOptions).single("picture");
}


const resize = async (req, res, next) => {

    let extension = req.file.mimetype.split("/")[1];
    let name = `${uuid.v4()}.${extension}`;

    let photo = await jimp.read(req.file.buffer);
    await photo.resize(60, 60);
    await photo.write(`${imagesPath}${name}`);
    req.body.image = name;

    next();

}

module.exports = {
    PictureUpload,
    resize
}
