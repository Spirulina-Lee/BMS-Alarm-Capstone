# NAU BMS Capstone: Intelligent Alarm Management

This is the frontend showcase website for the Northern Arizona University (NAU) Computer Engineering Capstone project (2025-2026).

## Project Overview

**Intelligent Building Management System (BMS) Alarm Management Strategy**

NAU operates a centralized BMS monitoring HVAC and mechanical systems. Frequent nuisance alarms obscure critical issues. This project delivers a strategy to prioritize actionable alarms and suppress noise using context-aware logic (occupancy, schedules).

**Key Integrations:**
*   Willow
*   Alerton Compass
*   Niagara Framework

## Features

*   **Interactive Dashboard**: Visualize alarm data with suppression status.
*   **AI Advisor**: Uses Google Gemini to analyze selected alarms and provide root cause analysis and recommendations.
*   **Methodology Overview**: Explains the logic behind alarm filtering.

## Local Development

To run this project locally on your machine:

### Prerequisites
*   Node.js (LTS version recommended)
*   npm (installed with Node.js)

### Setup

1.  **Clone the repository** (if you haven't already).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure API Key**:
    *   Create a `.env` file in the root directory.
    *   Add your Google Gemini API Key:
        ```env
        API_KEY=your_actual_api_key_here
        ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```
5.  Open the link shown in the terminal (usually `http://localhost:5173`).

## Technologies
*   React 18
*   TypeScript
*   Vite
*   Tailwind CSS
*   Recharts
*   Google Gemini API
*   React Router DOM

---
&copy; 2026 NAU Capstone Team.