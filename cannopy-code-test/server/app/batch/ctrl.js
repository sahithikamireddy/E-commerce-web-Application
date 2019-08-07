var db = require('../database');

const ctrl = {
    getBatches: function(req, res){
        db.getBatches((data) => {
            res.status(200).jsonp({ data })
        });
    },
    getBatch: function(req, res){
        db.getBatchByID(req.params.id, (data) => {
            res.status(200).jsonp({ data })
        });
    },
    addBatch: function (req, res) {
        db.addBatch(req, (data) => {
            res.status(200).jsonp({ data })
        });
    },
    updateBatch: function (req, res) {
        db.updateBatch(req, (data) => {
            res.status(200).jsonp({ data })
        });
    }
};

module.exports = ctrl;