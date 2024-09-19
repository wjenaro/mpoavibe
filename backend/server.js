// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const authRoutes = require('./routes/auth.routes');
// require('dotenv').config(); 

// const db = require('./config/db.config'); // Import db config

// // Middleware
// app.use(bodyParser.json());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// // app.use('/api/user', userRoutes);
// // app.use('/api/profile', profileRoutes);
// // app.use('/api/chat', chatRoutes);
// // app.use('/api/subscription', subscriptionRoutes);

// // Error handling middleware
// // app.use(require('./middlewares/error.middleware'));

// // Connect to database and start server
// db.sequelize.sync({ force: false }) // Set force to 'true' only if you want to recreate tables
//   .then(() => {
//     console.log('Tables synced');
//   })
//   .catch(err => console.log('Error syncing tables: ', err));

// // Server configuration
// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
