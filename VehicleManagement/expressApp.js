
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express application
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Vehicles page
app.get('/vehicles', (req, res) => {
    res.send('Vehicle List');
});

// Individual vehicle details
app.get('/vehicles/:id', (req, res) => {
    const vehicleId = req.params.id;

    res.send(`Vehicle ID: ${vehicleId}`);
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
