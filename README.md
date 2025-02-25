# BitByBits - Blog Website

Welcome to **BitByBits**, a blog platform designed to share computer science-related articles, tutorials, and insights. This website is aimed at helping students and professionals stay up-to-date with the latest trends in technology and software development. 🖥️📚

## Live Website
- **Frontend (UI)**: [bitbybits.netlify.app](https://bitbybits.netlify.app/)
- **Backend (API)**: [bloging-backend-q74o.onrender.com](https://bloging-backend-q74o.onrender.com)

## Technologies Used

### Frontend
- **Next.js**: A React-based framework that helps in building server-side rendered applications with ease.
- **React.js**: A JavaScript library for building user interfaces, used to create dynamic and interactive web pages.
- **Bootstrap**: A popular front-end framework for developing responsive and mobile-first websites.
- **SCSS**: A preprocessor scripting language that is interpreted into CSS, allowing for better organization and functionality of stylesheets.
- **RxJS**: A JavaScript library for reactive programming using Observables, to handle asynchronous data streams and manage API calls.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable and fast backend services.
- **Express.js**: A web application framework for Node.js, used to handle HTTP requests and build RESTful APIs.
- **MongoDB**: A NoSQL database used to store the blog content, providing flexibility with schema-less data storage.
- **TypeScript**: A superset of JavaScript that adds static typing, enhancing code quality and developer experience.

## Features 🚀

- **Blog Creation**: Users can create and publish their own blogs using a simple and intuitive form. ✍️
- **Blog Display**: Blogs are displayed in a clean and professional layout, offering an easy-to-read format. 📰
- **Search Functionality**: Users can search for specific blogs using keywords, with a case-insensitive search mechanism. 🔍
- **Trending Topics**: A section dedicated to trending topics, where students can follow and interact with the most popular subjects in computer science. 📈
- **Student Contributions**: Students can submit their own posts, share their experiences, or participate in discussions related to tech and programming. 🧑‍💻
- **Code Compilation**: BitByBits features an integrated code compiler, allowing users to write, run, and test their code directly on the platform. This helps students learn and experiment with various programming languages. 🖱️💻
- **Responsive Design**: The website is fully responsive, providing a seamless experience on both desktop and mobile devices. 📱💻

## How to Run the Project Locally

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (for local database setup, or use MongoDB Atlas)

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/bitbybits.git
    ```

2. **Install Dependencies**:
    For the **frontend**:
    ```bash
    cd bitbybits-frontend
    npm install
    ```

    For the **backend**:
    ```bash
    cd bitbybits-backend
    npm install
    ```

3. **Set Up Environment Variables**:
    - For the **frontend**, configure the `firebaseConfig.js` file and other necessary environment variables.
    - For the **backend**, create a `.env` file and add the MongoDB URI and other API keys if required.

4. **Run the Application**:
    For the **frontend**:
    ```bash
    cd bitbybits-frontend
    npm run dev
    ```

    For the **backend**:
    ```bash
    cd bitbybits-backend
    npm run dev
    ```

5. Open the app in your browser at `http://localhost:3000`.

## Contribution

Feel free to contribute to the project by submitting issues, suggestions, or pull requests. If you find any bugs or have suggestions for new features, please open an issue on the [GitHub repository](https://github.com/your-username/bitbybits).

## License

This project is open-source and available under the [MIT License](LICENSE).
