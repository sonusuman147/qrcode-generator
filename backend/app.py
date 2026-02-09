
# QR Code Generator Backend
# This Flask application provides an API to generate QR codes from text input.

from flask import Flask, request, jsonify
from flask_cors import CORS
import qrcode
import io
import base64

app = Flask(__name__)
# Enable CORS for all routes to allow cross-origin requests from the frontend
CORS(app)

@app.route("/generate", methods=["POST"])
def generate_qr():
    """
    Generate a QR code from the provided text.
    
    Expects a JSON payload with a 'text' key containing the data to encode.
    Returns a JSON response with a base64-encoded PNG image of the QR code.
    
    If the text is empty or missing, returns an error message.
    """
    # Get the text from the request JSON
    data = request.json.get("text", "").strip()  # Strip whitespace for cleaner input
    
    # Validate input: Ensure text is provided and not empty
    if not data:
        return jsonify({"error": "Text is required and cannot be empty"}), 400
    
    try:
        # Generate the QR code image
        img = qrcode.make(data)
        
        # Save the image to a BytesIO buffer
        buf = io.BytesIO()
        img.save(buf, format="PNG")
        buf.seek(0)  # Reset buffer position
        
        # Encode the image to base64
        img_str = base64.b64encode(buf.getvalue()).decode()
        
        # Return the base64 image in JSON response
        return jsonify({"image": img_str})
    
    except Exception as e:
        # Handle any unexpected errors during QR generation
        return jsonify({"error": "Failed to generate QR code"}), 500

if __name__ == "__main__":
    # Run the Flask app in debug mode for development
    app.run(debug=True)
