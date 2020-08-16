var mongoose = require('mongoose');
var jsonOptions = {};


module.exports={
    connect : function(){
        var URL= "mongodb+srv://dbuser:dbuser@cluster0.vsbgp.mongodb.net/user?retryWrites=true&w=majority" || process.env.URL;
        mongoose.connect(URL, jsonOptions);
        var connection = mongoose.connection;

        connection.on('connected', function(){
            console.log('Connected successfully');
        });


        connection.on('disconnected', function(){
            console.log('Disconnected');
            // RETRY CONNECTION
        });


        connection.on('reconnected', function(){
            console.log('Reconnected to MongoDB');
        });
    },
    disconnect : function(){
        mongoose.disconnect();   
    }
}
