# Intelligent BMS Alarm Management Strategy
## NAU Electrical Engineering Capstone (2025-2026)


### 📖 Project Background

Northern Arizona University (NAU) operates a centralized Building Management System (BMS) that monitors and controls HVAC and mechanical systems across campus. While this system generates critical alarms that help ensure occupant comfort and equipment performance, it also produces frequent nuisance alarms.

**The Challenge:**
Low-value or repetitive alarms create noise that can obscure true system issues and reduce operator efficiency (Alarm Fatigue). The current infrastructure involves disparated systems including **Alerton Compass**, **Niagara Framework**, and **Willow**.

**The Solution:**
This Capstone project delivers a unified alarm management strategy. By aggregating data from these systems and applying context-aware logic (occupancy schedules, maintenance modes), we can significantly reduce nuisance alarms and highlight actionable insights.

### 🏗️ System Architecture

The solution follows a multi-stage pipeline:

1.  **Data Ingestion**: Aggregating alarm logs from Willow, Compass, and Niagara.
2.  **Logic Layer**: Applying suppression rules based on building occupancy and schedules.
3.  **Prioritization**: Ranking alarms dynamically (Critical vs. Info).
4.  **Visualization**: A unified React-based dashboard for operators.

### 🚀 Local Development Guide

This is a modern web application built with **React**, **TypeScript**, and **Vite**. Follow these instructions to run the dashboard locally.

#### 1. System Prerequisites
*   **Node.js**: Version 18.0.0 or higher. [Download Node.js](https://nodejs.org/)
*   **npm**: Included with Node.js.

#### 2. Installation
Clone the repository (or unzip) and install dependencies:

```bash
# Navigate to project directory
cd BMS-Alarm-Capstone

# Install project dependencies
npm install
```

#### 3. Running the Application
Start the local development server:

```bash
npm run dev
```
The application will launch automatically at `http://localhost:5173`.
