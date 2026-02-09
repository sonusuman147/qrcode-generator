# 📌 QR Code Generator – Full Stack Project

A complete QR Code Generator web application built using HTML, CSS, JavaScript (Frontend) and Python Flask (Backend). Users can enter any text or URL, generate a QR code instantly, and download it as an image.

This project is beginner-friendly and explains every step from development to deployment.

--------------------------------------------------

# 🚀 Project Overview

## Frontend
- HTML, CSS, JavaScript
- Animated and responsive UI
- Text/URL input field
- Generate QR button
- QR display with auto-download

## Backend
- Python Flask
- QR generation using qrcode library
- Base64 image response
- CORS enabled

## Connection
- Frontend sends POST request to backend
- Backend returns QR image data
- Frontend displays and enables download

## Deployment
- Frontend: Netlify
- Backend: Render

--------------------------------------------------

## 📁 Folder Structure

QR_Code_Generator_Full_Project/
├── README.md
├── TODO.md
├── backend/
│   ├── app.py
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── script.js
    └── style.css

--------------------------------------------------

## 🧩 Backend Dependencies (backend/requirements.txt)

flask
qrcode[pil]
flask-cors

--------------------------------------------------

# 🖥️ Local Setup & Running (Windows)

1. Open Command Prompt  
   Press Win + R → type cmd → Enter

2. Navigate to project folder  
   cd "c:/Users/M S I/Desktop/mini project/QR_Code_Generator_Full_Project"

3. Create virtual environment  
   python -m venv venv

4. Activate virtual environment  
   venv\Scripts\activate

5. Install backend dependencies  
   pip install -r backend/requirements.txt

6. Start backend server  
   cd backend  
   python app.py  

   Backend runs on: http://127.0.0.1:5000

7. Start frontend server (new terminal)  
   cd frontend  
   python -m http.server 8000  

   Frontend runs on: http://localhost:8000

8. Open app in browser  
   start http://localhost:8000

--------------------------------------------------

## ✅ Testing the Application

1. Open browser  
2. Go to http://localhost:8000  
3. Enter text (example: Hello World)  
4. Click Generate  
5. QR code appears  
6. Click Download to save PNG  

--------------------------------------------------

## 🔄 How Frontend & Backend Connect

- Frontend uses fetch() with POST request
- Sends JSON: {"text": "user input"}
- Backend generates QR
- Image encoded to Base64
- Response returned as JSON
- Frontend displays QR and enables download
- CORS handled using flask-cors

--------------------------------------------------

## 🔁 Complete Working Flow

1. User opens frontend  
2. Enters text or URL  
3. Clicks Generate  
4. JavaScript validates input  
5. POST request sent to backend  
6. Backend generates QR  
7. QR encoded as Base64  
8. Response sent to frontend  
9. QR displayed  
10. Download link enabled  
11. User downloads image  

--------------------------------------------------

🌍 Deployment Guide

## Frontend Deployment (Netlify)
1. Go to https://netlify.com
2. Login / Sign up
3. Click Sites → Deploy manually
4. Drag and drop frontend folder
5. Deployment completes instantly
6. Copy Netlify URL

## Backend Deployment (Render)
1. Go to https://render.com
2. Login / Sign up
3. Push backend folder to GitHub
4. Click New → Web Service
5. Connect GitHub repo
6. Set:
   Build Command: pip install -r requirements.txt
   Start Command: python app.py
7. Deploy and copy backend URL

--------------------------------------------------

## 🔗 Connect Deployed Services

1. Open frontend/script.js
2. Update backend URL:
   const BACKEND_URL = "https://your-backend.onrender.com";
3. Redeploy frontend on Netlify

--------------------------------------------------

## 🛠️ Optional Environment Variable (Render)

FLASK_ENV=production

--------------------------------------------------

## ❗ Troubleshooting

- Backend not starting → activate venv, install dependencies
- Frontend not loading → check port 8000
- QR not generating → verify backend URL
- CORS error → ensure flask-cors enabled
- Download not working → ensure download attribute exists

--------------------------------------------------

🎯 Final Status

✅ Fully functional  
✅ Beginner friendly  
✅ Backend & Frontend connected  
✅ Local + Production ready  
✅ Deployable on Netlify & Render  

Happy Coding 🚀
