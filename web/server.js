const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Admin Routes
app.use('/api/admin/admins', require('./routes/admin/admins'));
app.use('/api/admin/auth', require('./routes/admin/auth'));

// Driver Routes
app.use('/api/driver/drivers', require('./routes/driver/drivers'));
app.use('/api/driver/auth', require('./routes/driver/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
