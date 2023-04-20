const mongoose = require('mongoose');
require('dotenv').config()

module.exports = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION)

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        })
    } catch (err) {
        console.log('Error connecting database');
    }
}