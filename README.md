# Intelligent BMS Alarm Management Strategy
## NAU Computer Engineering Capstone (2025-2026)

**Project Lead:** Shawn Young  
**Institution:** Northern Arizona University (NAU)  
**Department:** Electrical Engineering and Computer Science

### 📋 Project Overview

The Northern Arizona University Facility Services team manages a complex ecosystem of building systems using **Alerton Compass**, **Niagara Framework**, and **Willow**. A critical operational challenge is the high volume of "nuisance alarms"—repetitive or non-actionable alerts that cause operator fatigue and obscure critical system failures.

This Capstone project delivers a modern web-based **Alarm Management Dashboard** that acts as an intelligence layer on top of existing infrastructure.

**Key Objectives:**
*   **Data Aggregation:** Unify alarm streams from disparate BMS protocols.
*   **Noise Reduction:** Implement logic to suppress alarms based on building occupancy and schedule status.
*   **Prioritization:** Dynamic ranking of alarms using weighted scoring algorithms.
*   **Modern Interface:** A responsive React-based dashboard for facility operators.

### 🏗️ System Architecture

The solution is architected as a decoupled frontend application that consumes BMS data streams (simulated for this demonstration via JSON payloads).

*   **Frontend:** React.js (v18) with TypeScript for type safety.
*   **Build System:** Vite for high-performance local development and bundling.
*   **Visualization:** Recharts for alarm volume histograms and trend analysis.
*   **Styling:** Tailwind CSS for a strictly typed, responsive design system.
*   **Inference Engine:** Integration with Cloud APIs to provide natural language root-cause analysis for alarm descriptions.

### 🚀 Local Development Guide

Follow these instructions to deploy the application on a local machine for testing or presentation.

#### 1. System Prerequisites
*   **Node.js**: Version 18.0.0 or higher is required. [Download Node.js](https://nodejs.org/)
*   **npm**: Included with Node.js.

#### 2. Installation
Clone the repository (or unzip the project source) and install dependencies:

```bash
# Navigate to project directory
cd BMS-Alarm-Capstone

# Install project dependencies
npm install
```

#### 3. Configuration
The application runs out-of-the-box with mock data. To enable the optional "Smart Advisor" feature (which uses cloud inference to analyze alarm text), create an environment file:

1.  Create a file named `.env` in the root directory.
2.  Add your API key:
    ```env
    API_KEY=your_api_key_here
    ```

#### 4. Running the Application
Start the local development server:

```bash
npm run dev
```
The application will launch automatically at `http://localhost:5173`.

### 📂 Project Structure

*   `/src/components/Dashboard`: Contains the main operator interface, charts, and alarm feed lists.
*   `/src/services`: TypeScript services for handling API calls and data logic.
*   `/src/types`: Strict TypeScript definitions for BMS Alarm objects (IEEE/ASHRAE naming conventions compliant).

---
© 2026 Northern Arizona University Capstone Team. All Rights Reserved.
