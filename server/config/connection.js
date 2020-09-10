const mongoose = require('mongoose');

const connection = `mongodb+srv://deannapi:Mart3141@cluster0.c7ofa.mongodb.net/honey-do-list?retryWrites=true&w=majority`

mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/honeydolist', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// }).then(() => {
//   console.log('MongoDB connection successful.');
// }).catch((e) => {
//   console.log('MongoDB connection error: ', e.message)
// });

module.exports = mongoose.connection;
