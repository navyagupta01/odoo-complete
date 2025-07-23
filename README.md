# Skill Swap

Welcome to **Skill Swap**, a vibrant platform that connects professionals through an engaging swipe-based interface. Discover, match, and collaborate with others who share your skills, whether you're a developer, designer, writer, or any other skilled individual. Skill Swap empowers you to update your profile, showcase your projects, and build meaningful connections in a community designed for creativity and collaboration.

## 🚀 Problem Statement
Finding the perfect collaborator or learning from peers with similar expertise can be tough. Skill Swap solves this by offering:
- A swipe-left/swipe-right mechanism to match with professionals based on shared skills.
- Flexible profile updates to reflect your expertise and portfolio.
- A project showcase to highlight your work and attract partners.
- A secure, scalable, and intuitive platform for skill-based networking.

<h2 align="center">📺 Demo Video</h2>
<p align="center">
  <a href="https://drive.google.com/file/d/1hk1_sPT2mUxmpcikU9vyrbJ-E2l3gtaj/view?usp=drivesdk" target="_blank">
    Click me!
  </a>
</p>


## 🌟 Features
- **Swipe-to-Match**: Swipe left or right to connect with users who share your skills.
- **Dynamic Profiles**: Update your skills, bio, and portfolio to shine in the community.
- **Project Showcase**: Add and display projects to showcase your expertise.
- **Real-Time Matching**: Powered by Redis for fast, efficient connections.
- **Robust Backend**: Built with Java Spring Boot and MongoDB for scalability and reliability.
- **Modern Frontend**: Node.js ensures a dynamic and responsive user experience.

## 🛠️ Tech Stack
- **Backend**: Java Spring Boot for powerful and scalable API development.
- **Frontend**: Node.js for a dynamic, modern, and responsive interface.
- **Database**: MongoDB for flexible, schema-less storage of user and project data.
- **Caching**: Redis for real-time matching and performance optimization.
- **Other Tools**: REST APIs, JSON for data exchange, and modern DevOps practices.

## 📋 Getting Started

### Prerequisites
- Java 17+
- Node.js 16+
- MongoDB
- Redis
- Git

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/skill-swap/skill-swap.git
   cd skill-swap
   ```

2. **Backend Setup (Spring Boot)**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Configure MongoDB and Redis in `application.properties`.
   - Build and run:
     ```bash
     ./mvnw spring-boot:run
     ```

3. **Frontend Setup (Node.js)**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the Node.js server:
     ```bash
     npm start
     ```

4. **Database & Cache**:
   - Ensure MongoDB and Redis are running locally or provide remote connection strings.
   - Initialize the database with the provided `init-db.js` script (if applicable).

5. **Access the App**:
   - Visit `http://localhost:3000` (or the configured port) in your browser.

## 📈 Future Enhancements
- **In-App Messaging**: Enable direct communication between matched users.
- **Skill-Based Ratings**: Allow users to rate collaborators based on expertise.
- **AI-Powered Matches**: Use machine learning for smarter, personalized recommendations.
- **Mobile Apps**: Launch iOS and Android versions for skill-swapping on the go.


**Skill Swap** - Swipe, Match, Create! Crafted by a team dedicated to empowering professionals through collaboration.
