# Chatbot Application

## Objective

A functional chatbot frontend application built using **React**, **Redux Toolkit**, **React Router**, and **Material UI (MUI)**. The bot simulates message streaming, mimics API interaction, and supports protected routing with a responsive layout.

---

## Live Demo

https://chatbot-x28k.onrender.com/

---

## Screenshots
### Home Page
![WhatsApp Image 2025-04-23 at 11 03 18_610a9f60](https://github.com/user-attachments/assets/859f18c1-0904-4990-a209-11c09d5642f1)

### Login Page
![WhatsApp Image 2025-04-23 at 11 03 42_c21fcafd](https://github.com/user-attachments/assets/e6ab2fa2-0248-4555-ad50-9e78cd3b4c82)

### chat Page
![WhatsApp Image 2025-04-23 at 11 03 03_7b1a5873](https://github.com/user-attachments/assets/b03a9120-6322-4055-8cd6-611629d8f706)

---

## Github Repository

[https://chatbot-x28k.onrender.com/](https://github.com/vivek0902/chatbot-react/)

---
## Github Commits History

https://github.com/vivek0902/chatbot-react/commits/main/

![image](https://github.com/user-attachments/assets/73f66b4b-a7c0-4bd7-93f6-adb03ac21d1c)
![image](https://github.com/user-attachments/assets/025f1be7-f097-4329-ae0b-22e65c49faac)
![image](https://github.com/user-attachments/assets/a803215d-58d5-43c7-a010-4f47723a5e01)

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
   Visit `http://localhost:5173`

---

# Chatbot Commands Guide

Interact with the chatbot using the following commands:

## hello
*Bot responds:*
- Hi there! 👋  
- I'm your friendly chatbot!  
- How can I help you today?

---

## how are you
*Bot responds:*
- I'm doing great!  
- Just some JS running in the background ⚙  
- Let me know if you need help.

---

## what's your name
*Bot responds:*
- I’m called CodeBot.  
- A chatbot powered by React and Markdown!  
- Nice to meet you!

---

## bye
*Bot responds:*
- Goodbye! 👋  
- See you next time.  
- Stay curious!

---



## code example



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

- Static credentials are hardcoded for login demo (e.g., email: user@123, username: pass).




