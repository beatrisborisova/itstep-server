const mongoose = require('mongoose');
require('dotenv').config()

module.exports = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION)
        mongoose.connection.on('connected', () => {
            console.log('Database connected');
        })

    } catch (err) {
        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        })
    }
}