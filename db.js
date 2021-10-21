const mongoose = require('mongoose');
module.exports = () => {
  function connect() {
    mongoose.connect('mongodb://localhost:27017/react', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
        return
      }
      
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);

};

