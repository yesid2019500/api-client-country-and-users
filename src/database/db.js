const mongoose = require('mongoose');
require('dotenv').config()

// yessiangulo
// yessiangulo2020
// ipp: 0.0.0.0/0

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI)
       console.log( 'CONNECT DATABASE' );
    } catch (error) {
        console.log(error );
    }
}

module.exports = {connectDB}

