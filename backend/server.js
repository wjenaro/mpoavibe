const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db.config'); // Adjust import
const authRouter= require('./routes/auth.routes')

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Use CORS middleware
app.use(cors());

app.use('/api', authRouter)

// Start the server and listen on the defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);

  // Ensure Sequelize is synced with the database
  db.sequelize.sync({ force: false }) // Access db.sequelize instead of sequelize
    .then(() => {
      console.log('Database synced.');
    })
    .catch((err) => {
      console.error('Error syncing database:', err);
    });
});
