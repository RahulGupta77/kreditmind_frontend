# Frontend Documentation

## Deployed Link
[Frontend Application](https://kreditmind-frontend.vercel.app)

## Tools
- **React**
- **Tailwind CSS**

## Approach
- Built user signup and login components to personalize the user experience regarding chat history and document details. The JWT token is stored in cookies.
- When a user queries from the chatbox, an API call is made to the backend, and after a few seconds, the user receives the response.
- Chat history is persisted by making a call to the backend to retrieve all previous chats, allowing users to refresh the page or log in from different devices.
- Utilized **Tailwind CSS**, **React Icons**, and **Toaster** libraries to enhance the UI and UX.

## Challenges
- Faced difficulties in implementing automatic scrolling when the user sends a query or receives a response. Resolved this by using ChatGPT for guidance and customizing the solution to fit my needs.

## How to Run the Code
1. Clone the repository.
2. Navigate to the root folder of the project.
3. In the terminal, execute the following commands:
   ```bash
   npm install
   npm start