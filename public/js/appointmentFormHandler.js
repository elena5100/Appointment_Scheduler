document.getElementById("appointmentForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // 🚨 Validation: Prevent empty form submission
    if (!firstName || !lastName || !date || !time) {
        alert("All fields are required!");
        return;
    }

    // Prepare appointment data
    const appointment = { firstName, lastName, date, time };

    try {
        const response = await fetch("/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(appointment),
        });

        const data = await response.json();

        if (data.redirect) {
            window.location.href = data.redirect; 
        } else {
            alert("Error: Unable to book appointment.");
        }
    } catch (error) {
        console.error("Error booking appointment:", error);
        alert("Something went wrong. Please try again.");
    }
});
