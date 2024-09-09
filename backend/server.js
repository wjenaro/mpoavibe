const express = require('express');
const app = express();
require('dotenv').config(); 

const { db } = require('./config/db.config');

// Middleware
// app.use(bodyParser.json());
// app.use(cors());

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/profile', profileRoutes);
// app.use('/api/chat', chatRoutes);
// app.use('/api/subscription', subscriptionRoutes);

// Error handling middleware
// app.use(require('./middlewares/error.middleware'));

// Connect to database and start server
db.sequelize.sync().then(() => { // Use db.sequelize here
  app.listen(process.env.PORT, () => {
    console.log('Server running on port 4000');
  });
}).catch(err => {
  console.error('Failed to sync database:', err);
});
