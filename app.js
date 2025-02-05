const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files from "public" folder

// Store appointments in an array
let appointments = [];

// Handle form submission with validation
app.post("/submit", (req, res) => {
    const { firstName, lastName, date, time } = req.body;

    // 🚨 Validation: Prevent empty names from being saved
    if (!firstName.trim() || !lastName.trim() || !date || !time) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    // Save the valid appointment
    const appointment = {
        firstName,
        lastName,
        date,
        time,
        submittedAt: new Date().toLocaleString(),
    };

    appointments.push(appointment);

    // Redirect to confirmation page with details
    res.json({
        redirect: `/pages/confirmation.html?firstName=${firstName}&lastName=${lastName}&date=${date}&time=${time}`,
    });
});

// Admin route to view all appointments
app.get("/admin-data", (req, res) => {
    res.json(appointments);
});

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
