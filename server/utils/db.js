// TO-DO: 
const mongoose = require('mongoose');

async function connect_db() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

mongoose.connection.on('error', (err) => {
  console.error(err);
});

module.exports = connect_db;