# Baḥthi – Intelligent Academic Research Assistant

This repository hosts **Baḥthi** (بحثي), an AI-powered application that helps users craft full-fledged academic papers that comply with publishing standards (Scopus, PubMed, etc.).

## Features

- 📱 Cross-platform mobile application built with React Native
- 🚀 Fast and efficient backend API built with FastAPI
- 🔒 Secure authentication system
- 📝 Academic paper generation and editing
- 🌐 Multi-language support (Arabic & English)
- 📊 Project management and tracking

## Project Structure

```
bahthi/
├─ backend/           # FastAPI micro-service (REST API)
│   ├─ main.py       # Main application entry point
│   └─ requirements.txt
├─ mobile/           # React Native mobile application
│   ├─ App.tsx
│   ├─ package.json
│   └─ src/
│       └─ screens/  # Application screens
└─ README.md
```

## Prerequisites

- Python 3.8 or higher
- Node.js 18 or higher
- Expo CLI
- Git

## Installation & Setup

### Backend Setup

```bash
# 1. Create & activate virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\Activate

# 2. Install dependencies
cd backend
pip install -r requirements.txt

# 3. Run the development server
uvicorn main:app --reload --port 8000
```

### Mobile App Setup

```bash
# 1. Install dependencies
cd mobile
npm install

# 2. Start the Expo development server
npm start
```

## API Documentation

Once the backend server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/yourusername/bahthi](https://github.com/yourusername/bahthi)
