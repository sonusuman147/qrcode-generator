
// QR Code Generator Frontend Script
// This JavaScript file handles the interaction between the user interface and the backend API.
// It sends user input to the backend, receives the QR code image, and updates the UI accordingly.

// Configurable backend URL - change this for production deployment
const BACKEND_URL = "http://127.0.0.1:5000"; // For local development; update to deployed backend URL in production

async function generateQR() {
    // Get the text input from the user
    const text = document.getElementById("qrText").value.trim();
    
    // Validate input: Ensure text is not empty
    if (!text) {
        displayError("Please enter some text or a URL to generate a QR code.");
        return;
    }
    
    // Clear any previous error messages
    clearError();
    
    // Get UI elements
    const button = document.querySelector("button");
    const img = document.getElementById("qrImage");
    const btn = document.getElementById("downloadBtn");
    
    // Show loading state
    button.disabled = true;
    button.textContent = "Generating...";
    img.style.display = "none"; // Hide image during generation
    btn.style.display = "none"; // Hide download button
    
    try {
        // Send POST request to the backend API
        const res = await fetch(`${BACKEND_URL}/generate`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({text})
        });
        
        // Check if the response is successful
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to generate QR code");
        }
        
        // Parse the JSON response
        const data = await res.json();
        
        // Set the image source to the base64 data
        img.src = "data:image/png;base64," + data.image;
        img.style.display = "block"; // Show the image
        
        // Set the download link href to the image source
        btn.href = img.src;
        btn.style.display = "inline-block"; // Show the download button
        
    } catch (error) {
        // Handle errors (network, backend, etc.)
        console.error("Error generating QR code:", error);
        displayError(error.message || "An error occurred while generating the QR code. Please try again.");
        img.style.display = "none";
        btn.style.display = "none";
    } finally {
        // Reset loading state
        button.disabled = false;
        button.textContent = "Generate";
    }
}

// Function to display error messages
function displayError(message) {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.textContent = message;
}

// Function to clear error messages
function clearError() {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.textContent = "";
}
