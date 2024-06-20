const mongoose = require('mongoose');
const { DB_STRING, DB_NAME } = process.env;

async function connectToDatabase() {
    try {
        await mongoose.connect(`${DB_STRING}/${DB_NAME}`);
        console.log('DB Connected.')
    } catch (err) {
        console.log('Error in DB Connection.')
        console.log(err);
    }
}

module.exports = connectToDatabase;