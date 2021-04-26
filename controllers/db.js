const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected to database successfully');
    }
});