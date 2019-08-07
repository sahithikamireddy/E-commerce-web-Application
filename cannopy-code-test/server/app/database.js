const { Pool, Client } = require('pg');
var fs = require('fs');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '0414',
  port: 3211,
});

client.connect()

module.exports = {
    // Use this function to seed your db if you'd like
    seedDB: function(cb){
        let sql = fs.readFileSync('../db/seed.sql').toString();

        client.query(sql, (err, result) => {
            cb();
    })
    },
    getStrains: function(cb) {
        client.query('SELECT * FROM strain', [], (err, res) => {
            if(err)
            //console.log('**Error**')
            console.error(err.stack);
    else
        cb(res.rows);
    })
    },
    getStrainByID: function(id, cb){
        client.query('SELECT * FROM strain WHERE id=$1', [id], (err, res) => {
            if(err)
            console.error(err.stack);
    else
        cb(res.rows[0]);
    })
    },
    getBatches: function(cb) {
        client.query('SELECT * FROM batch', [], (err, res) => {
            if(err)
            console.error(err.stack);
    else
        cb(res.rows);
    })
    },
    getBatchByID: function(id, cb){
        client.query('SELECT * FROM batch WHERE id = $1', [id], (err, res) => {
            if(err)
            console.error(err.stack);
    else
        cb(res.rows[0]);
    })
    },
    addBatch: function (req,callback) {
        client.query('INSERT INTO batch (ID, StrainID, Type, size, Quantity) VALUES ($1, $2, $3, $4, $5)', [req.body.id,
            req.body.strainId, req.body.type, req.body.size, req.body.quantity], (err, res) => {
            if(err)
            console.error(err.stack);
    else callback("Added Succesfully");
    })
    },
    updateBatch: function (req,callback) {
        client.query('UPDATE batch SET ID = $1, StrainID = $2, Type = $3, size = $4, Quantity = $5 WHERE ID = $6', [req.body.id,
            req.body.strainId, req.body.type, req.body.size, req.body.quantity, req.body.id], (err, res) => {
            if(err)
            console.error(err.stack);
    else callback("Updated Successfully");
    })
    },
    addstrain: function (req,callback) {
        client.query('INSERT INTO strain (ID, Name,Type) VALUES ($1, $2, $3)', [req.body.id,
            req.body.Name, req.body.Type], (err, res) => {
            if(err)
            console.error(err.stack);
    else
        callback("Added Succesfully");
    })
    },

    updatestrain: function (req,callback) {
        client.query('UPDATE strain SET ID = $1, Name= $2, Type = $3 WHERE ID = $4', [req.body.id,
             req.body.Name, req.body.Type, req.body.id], (err, res) => {
            if(err)
            console.error(err.stack);
    else
        callback("Updated Successfully");

    })
    }
};