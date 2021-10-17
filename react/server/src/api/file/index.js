const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const imagesPath = path.resolve("public/images") + path.sep;
const { catchErrors } = require("../../middlewares");


router.get("/company-image/:name", catchErrors(async (req, res) => {
    let { name } = req.params;

    if (!name) {
        return res.status(400).json({message: "Bad request"});
    }
    let pathFile = imagesPath + path.sep + name;
    if (fs.existsSync(pathFile)) {
        return res.status(200).sendFile(pathFile);
    }
    return res.status(404).json({message: "Image not found"});
}))



module.exports = router;