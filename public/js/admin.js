// Function to load appointments from the server
async function loadAppointments() {
    try {
        const response = await fetch("/admin-data");
        const appointments = await response.json();
        const list = document.getElementById("appointmentsList");
        list.innerHTML = ""; // Clear previous content

        if (appointments.length === 0) {
            list.innerHTML = "<p>No appointments booked yet.</p>";
            return;
        }

        // Loop through each appointment and add it to the list
        appointments.forEach(appt => {
            const li = document.createElement("li");
            li.textContent = `${appt.firstName} ${appt.lastName} - ${appt.date} at ${appt.time}`;
            list.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading appointments:", error);
        document.getElementById("appointmentsList").innerHTML = "<p>Error loading data.</p>";
    }
}

// Load appointments when the page loads
loadAppointments();
