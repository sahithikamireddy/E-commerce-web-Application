var db = require('../database');

const ctrl = {
    getStrains: function(req, res){
        console.log(req);
        db.getStrains((data) => {
            res.status(200).jsonp({ data: data })
        });
    },
    getStrain: function(req, res){
        db.getStrainByID(req.params.id, (data) => {
            res.status(200).jsonp({ data: data })
        });
    },

    addstrain: function (req, res) {
        db.addstrain(req, (data) => {
            res.status(200).jsonp({ data })
        });
    },

    updatestrain: function (req, res) {
        db.updatestrain(req, (data) => {
            res.status(200).jsonp({ data })
        });
    }
};

module.exports = ctrl;