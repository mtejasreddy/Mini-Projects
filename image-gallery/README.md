# 📸 Image Gallery App (React + Unsplash API)

A responsive image gallery built with **ReactJS** that allows users to search and view images fetched from the **Unsplash API**.  
This project demonstrates **React components, state management, API integration, and responsive UI design**.

---

## 🚀 Features
- Search images by keyword
- Display results in a responsive grid
- Loading and error handling states
- Author credits for each image
- Clean UI with hover effects

---

## 📂 Project Structure
image-gallery/
│── src/
│   ├── App.jsx            # Root component, manages state
│   ├── App.css            # styling
│   └── components/
│       ├── SearchBar.jsx  # Input + API call
│       ├── Gallery.jsx    # Grid layout for images
│       └── ImageCard.jsx  # Single image card
│── package.json
│── README.md


---

## 🛠️ Tech Stack
- **ReactJS** – component-based UI
- **Axios** – API requests
- **Unsplash API** – image data
- **CSS Grid & Flexbox** – responsive layout

---

## 🎮 How to Use
1. Clone the repository:
   git clone https://github.com/mtejasreddy/Mini-Projects.git
    - cd Mini-Projects/image-gallery

2. Install dependencies:
    - In Terminal -> npm install

3. Add your Unsplash API key in SearchBar.jsx:
    - client_id=YOUR_ACCESS_KEY

4. Run the app:
    - npm start

## Learning Outcomes
- Practiced React state & props flow
- Implemented controlled components for input
- Integrated third-party API (Unsplash) with Axios
- Built responsive layouts using CSS Grid
- Handled loading & error states 