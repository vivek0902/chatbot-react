# Chatbot Application

## Objective

A functional chatbot frontend application built using **React**, **Redux Toolkit**, **React Router**, and **Material UI (MUI)**. The bot simulates message streaming, mimics API interaction, and supports protected routing with a responsive layout.

---
## 📦 Setup & Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/chatbot-app.git
   cd chatbot-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the application**  
   ```bash
   npm start
   ```

4. Open in browser  
   Visit `http://localhost:3000`

---

## Tech Stack

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **Material UI (MUI)**
- **JavaScript (ES6+)**

---

## Core Features

### 1. Chat Interface
- A clean, user-friendly chat UI implemented using **Material UI**.
- Users can type and send messages; bot replies are generated with mock API calls using `setTimeout` wrapped in **Promises** to simulate latency.
- Bot replies are **streamed line by line** with:
  - A short delay for each line (simulating real-time streaming)
  - Distinct styles/colors based on tags or roles
  - **Tooltips** on hover showing the role or tag
  - Messages stacked **horizontally** like ChatGPT for better UI experience

### 2. State Management (Redux)
- All states are handled using **Redux Toolkit**, including:
  - User messages
  - Bot responses (streamed line by line)
  - Authentication status (for protected routing)

### 3. Routing (React Router)
- `/login`: Basic login page with static credentials
- `/chat`: Main chat interface – **protected route**
  - Only accessible after login
  - Invalid credentials redirect back to login

### 4. Responsiveness & Styling
- All UI components styled using **Material UI**
- Fully responsive design optimized for both desktop and mobile

---

## Bonus Feature

### Login Page
- Static login using hardcoded credentials (no real backend)
- After login, user is redirected to `/chat`
- Direct access to `/chat` is restricted for unauthenticated users

---

## Notes & Assumptions

 - Mock API behavior is simulated with Promises and setTimeout.

 - Bot responses use a simple tagged format internally (e.g., <admin> Hello), parsed and styled accordingly.

- Horizontal message rendering is intentional to maintain UI consistency and clarity.

- Redux Toolkit was chosen for efficient state management.

- Static credentials are hardcoded for login demo (e.g., email: user@test.com, username: testuser).
