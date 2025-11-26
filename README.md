# NAU BMS Capstone: Intelligent Alarm Management Strategy

**Academic Year:** 2025 Fall - 2026 Spring  
**Project:** Intelligent Building Management System (BMS) Alarm Management Strategy  
**Institution:** Northern Arizona University (NAU)

This is the frontend showcase website for the NAU Computer Engineering Capstone project. It serves as a presentation layer to demonstrate how we categorize, prioritize, and manage building alarms.

## 🏗️ Project Context

NAU operates a centralized BMS monitoring HVAC and mechanical systems. Frequent "nuisance alarms" (false positives) obscure critical issues, leading to operator fatigue and inefficiency.

**Our Solution:**
1.  **Analyze** patterns of nuisance alarms across campus.
2.  **Develop** suppression logic based on occupancy and schedules.
3.  **Design** a prioritized dashboard for high-value alerts.

**Key Integrations:**
*   **Willow**: Digital Twin & Analytics
*   **Alerton Compass**: Building Controls
*   **Niagara Framework**: System Integration

## 🚀 How to Run Locally

This project is built with React, Vite, and Tailwind CSS.

### 1. Prerequisites
*   **Node.js**: [Download LTS Version](https://nodejs.org/) (Version 18+ recommended)
*   **Git**: [Download Git](https://git-scm.com/)

### 2. Installation
Open your terminal (or VS Code Terminal) in the project folder and run:

```bash
# Install all required dependencies (including React Router)
npm install
```

### 3. API Key Configuration (Optional)
To enable the AI Analysis features (Gemini), you need an API key.
1.  Create a file named `.env` in the root folder.
2.  Add your key:
    ```env
    API_KEY=your_google_gemini_api_key_here
    ```
*(Note: The site runs without a key, but the "AI Advisor" feature will mock responses or show an error.)*

### 4. Start Development Server
```bash
npm run dev
```
Click the link displayed in the terminal (usually `http://localhost:5173`) to open the site.

## 🛠️ Tech Stack
*   **Framework**: React 18 + TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM
*   **Charts**: Recharts
*   **Icons**: Lucide React
*   **AI Integration**: Google Gemini API

---
&copy; 2026 NAU Capstone Team.