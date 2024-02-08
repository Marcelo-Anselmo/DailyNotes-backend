const mongoose = require('mongoose');
require('dotenv').config()

const dbConfig = process.env.DB_KEY;

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