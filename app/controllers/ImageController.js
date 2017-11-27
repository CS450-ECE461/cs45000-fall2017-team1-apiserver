var blueprint = require ('@onehilltech/blueprint'),
    util = require ('util'),
    fs = require ('fs'),
    winston = require ('winston');

function ImageController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (ImageController);

ImageController.prototype.uploadImage = function () {
    return blueprint.app.server.upload.singleFile ('image', function (req, res) {
        return res.render ('helloworld.pug', {file: req.file});
    });
};

module.exports = exports = ImageController;