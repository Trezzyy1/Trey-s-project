// Import the Express module
const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse form data

// Initialize the Express app
const app = express();
const PORT = 3000; // Define the port where the server will run

// Middleware setup to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., your HTML, CSS, JavaScript files) from the "public" folder
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    // Access the form data from the request body
    const formData = req.body;
    console.log('Form Data Received:', formData); // Logs data to the console for testing

    // Send a response back to the client
    res.send('Form submission received!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
