
// importing mongoose
const mongoose = require('mongoose');

// getting database url from env variables
// const { MONGODB_URL } = process.env;
const MONGODB_URL = "mongodb+srv://ajitkumaryadav1223:VGPbahpy6qXrnpoZ@cluster0.uxzzd4d.mongodb.net/?retryWrites=true&w=majority";


// connect to database
exports.connect = () => {
    // connecting
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(
            // if database connected
            console.log('Database is connected successfullly')
        )
        .catch((error) => {
            // if there is some error
            console.log('database connection is failed');
            console.log(error);
            process.exit(1);
        })
}