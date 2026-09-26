[![Deploy to Layero](https://github.com/nndrey/Chat_Slack/actions/workflows/deploy.yml/badge.svg)](https://github.com/nndrey/Chat_Slack/actions/workflows/deploy.yml)
---
[![hexlet-check](https://github.com/nndrey/Chat_Slack/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nndrey/Chat_Slack/actions/workflows/hexlet-check.yml)

---

# 💬 Chat-Slack: Real-time Messaging Application

A minimalist Slack-like messenger built with React that demonstrates how modern frontend applications handle real-time data and complex state logic.

[🌐 Live Demo](http://chat-slack.layero.app)

> **Tip:** Open the demo link in two different browser tabs to see messages appear instantly across windows.

---

## ✨ Core Features

⚡ **Real-time Communication**
Built on native WebSockets for instant message delivery without page refreshes or polling.

🔐 **Secure Authentication**
Registration and login via username and password with proper session handling and protected routes.

📢 **Dynamic Channels**
Create public discussion rooms and manage their details on the fly.

🎯 **Optimistic User Experience**
The interface feels lightning-fast because it doesn't wait for the server. When you send a message, it immediately appears in the chat window while quietly syncing with the backend in the background.

🛡 **Production-Ready Reliability**
Integrated error monitoring ensures that if something breaks in production, you'll know about it first.

---

## 🏗 Architecture & State Management

This project showcases a professional understanding of data flow by strictly separating concerns:

| Layer                                          | Technology         | Why it matters                                                                                                                                                                                                    |
| :--------------------------------------------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Server Data**<br>(channels, messages)        | **TanStack Query** | I don't manually track loading spinners or write repetitive `try-catch` blocks. The library handles caching, refetching, and network errors automatically.                                                        |
| **Client UI**<br>(active channel, open modals) | **Zustand**        | A lightweight store that keeps interface logic clean. No Redux boilerplate — just simple hooks to control what the user sees right now.                                                                           |
| **User Input**                                 | **@mantine/form**  | Complex forms are notoriously verbose. This library abstracts away validation, dirty-checking, and field arrays into a declarative API.                                                                           |
| **Visual Style**                               | **Mantine UI**     | Zero custom CSS files. All spacing, colors, radii, and dark mode behavior are controlled via component props and global theme tokens. This guarantees pixel-perfect consistency and accessibility out of the box. |

---

## 🛠 Tech Stack

*   **Framework:** React 18+
*   **Language:** JavaScript
*   **Bundler:** Vite
*   **UI Library:** Mantine
*   **Routing:** React Router DOM
*   **State Management:** Zustand, TanStack Query
*   **Real-time:** Native WebSockets
*   **Error Monitoring:** Bugsink

---

## 👨‍💻 What This Project Proves About My Skills

Building *Chat-Slack* goes beyond basic tutorial coding. It proves my ability to solve architectural challenges:

*   **I think in systems.** By using TanStack Query for server state and Zustand for client state, I avoid "prop-drilling" hell and ensure the app stays fast even as features grow.
*   **I prioritize perceived performance.** Users hate waiting. Optimistic updates make the application feel instantaneous, which is a critical skill for consumer-grade products.
*   **I ship accessible interfaces.** Relying on Mantine means every dropdown, modal, and input works perfectly with keyboard navigation and screen readers from day one.
*   **I understand the full lifecycle.** From configuring Vite builds to deploying live and tracking runtime bugs, I take ownership of getting code safely into users' hands.

---

## 📝 Future Roadmap

If this were a commercial product, the next iterations would include:
*   Direct Messages (private one-to-one chats).
*   Browser Push Notifications for new mentions.
*   File and image uploads within channels.
*   Unit and Integration tests coverage (React Testing Library + Vitest).

---

<div align="center">
Made with ☕ React and attention to detail.
</div>