// Display the confirmed appointment details
function showConfirmation() {
    // Get data from the URL
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get("firstName") || "Not Provided";
    const lastName = params.get("lastName") || "Not Provided";
    const date = params.get("date") || "Not Provided";
    const time = params.get("time") || "Not Provided";

    // Find the confirmation text box and update it
    document.getElementById("confirmationText").innerHTML = 
        `Thank you, <strong>${firstName} ${lastName}</strong>!<br>
         Your appointment is scheduled for <strong>${date}</strong> at <strong>${time}</strong>.`;
}

// Run this function when the page loads
window.onload = showConfirmation;
