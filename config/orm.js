var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput, callback){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    },

    insertOne: function(tableInput, colSelect, valOfCol, callback){
        var queryString = "INSERT INTO ??(??) VALUES (?)";
        connection.query(queryString, [tableInput, colSelect, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    },

    updateOne: function(tableInput, colOne, valOne, id, callback){
        var queryString = "UPDATE " + tableInput;
        queryString += " SET " + colOne + "=" + valOne;
        queryString += " WHERE id=";
        queryString += id;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(queryString);
            callback(result);
        })
    }

};

module.exports = orm;

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`