const mongoose = require('mongoose');

const dbConfig = "mongodb+srv://admir:b2rF7yB774egVzZZ@cluster0.xpykcik.mongodb.net/anottations?retryWrites=true&w=majority";

const connection = () => {
    mongoose.connect(dbConfig)

    mongoose.connection.on("connected", () => {
        console.log("Connected to the database");
    });

    mongoose.connection.on("error", (err) => {
        console.error("Database connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
        console.log("Disconnected to the database");
    });
};


module.exports = connection;