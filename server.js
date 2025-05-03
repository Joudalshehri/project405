// server.js

// Import required modules
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Set up storage configuration for uploaded images in 'public/uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'public', 'uploads');
    // Create the folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate a unique filename using timestamp and random number
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage });

// Enable CORS to allow frontend access
app.use(cors());

// Serve uploaded images as static files
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// Load existing reports from a mock JSON database
const dbFile = path.join(__dirname, 'db.json');
let reports = fs.existsSync(dbFile) ? JSON.parse(fs.readFileSync(dbFile)) : [];

// Handle POST request to upload a new report with optional image
app.post('/api/reports', upload.single('image'), (req, res) => {
  try {
    const { itemName, itemType, location, date, time, description } = req.body;
    const image = req.file ? req.file.filename : '';

    const newReport = { itemName, itemType, location, date, time, description, image };
    reports.push(newReport);

    // Save updated reports to the JSON file
    fs.writeFileSync(dbFile, JSON.stringify(reports, null, 2));
    res.status(200).json({ message: 'Saved successfully' });
  } catch (err) {
    console.error('Error while saving:', err);
    res.status(500).json({ error: 'Failed to save' });
  }
});

//  Handle GET request to return all reports
app.get('/reports', (req, res) => {
  res.json(reports);
});

// Start the server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
