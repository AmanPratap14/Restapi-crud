const mongoose= require('mongoose');

const connectDB= async () => {
    const connect = mongoose.connect('mongodb://127.0.0.1:27017', 
    {   useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));
}


module.exports= connectDB;