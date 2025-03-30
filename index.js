const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to validate inputs
const validateInputs = (num1, num2, res, allowZero = true) => {
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Both num1 and num2 are required.' });
    }
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Inputs must be valid numbers.' });
    }
    if (!allowZero && parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }
    return null;
};

// Arithmetic Endpoints with Improved Error Handling
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const error = validateInputs(num1, num2, res);
    if (error) return;
    res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const error = validateInputs(num1, num2, res);
    if (error) return;
    res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const error = validateInputs(num1, num2, res);
    if (error) return;
    res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const error = validateInputs(num1, num2, res, false);
    if (error) return;
    res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
