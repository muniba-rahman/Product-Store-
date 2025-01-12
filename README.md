# Product Store Website

This project is a full-fledged product store website built using the MERN stack (MongoDB, Express, React, Node.js). The website allows me to perform CRUD operations (Create, Read, Update, Delete) on products stored in a MongoDB database. The user interface is designed with Chakra UI for easy and efficient styling, and I used Zustand for state management.

## Technologies Used

- **MongoDB**: A NoSQL database used to store product information. It provides flexibility in data structure, making it ideal for handling various product attributes.
- **Express**: A fast, unopinionated web framework for Node.js, used to build the backend API that handles requests like creating, updating, deleting, and retrieving products.
- **React**: A JavaScript library used to build the frontend, which interacts with the backend API to display products and allow users to perform CRUD operations.
- **Node.js**: A runtime environment for executing JavaScript code on the server side, enabling backend functionality with Express.
- **Chakra UI**: A simple, modular, and accessible component library used to build the user interface. It helped me create a responsive and visually appealing frontend quickly.
- **Zustand**: A small, fast, and scalable state management solution used to manage the application's state, particularly for handling user interactions like adding or updating products.

## Features

1. **Product Management**:
   - **Create**: As an admin, I can add new products to the database with details such as name, price, description, and image.
   - **Update**: I can update existing product information.
   - **Delete**: I can remove products from the database.
   - **Display Products**: All products are fetched from the MongoDB database and displayed in a grid or list format on the frontend.

2. **Responsive Design**: 
   The application is fully responsive, ensuring it works seamlessly across devices, including desktops, tablets, and mobile phones.

3. **State Management**:
   Zustand is used to manage the state of products on the frontend. This allows for smooth and quick updates to the UI when product data is added, updated, or deleted without unnecessary re-renders.

## Backend Implementation

- **Express API**: The backend API is built using Express, handling routes for product CRUD operations. The backend processes requests, communicates with the MongoDB database, and sends back responses to the frontend.
- **MongoDB Integration**: The backend is connected to MongoDB, where all product data is stored and fetched. Mongoose is used to model the data and interact with the database.

## Frontend Implementation

- **React Components**: The frontend is built using React, with each part of the product management process (adding, updating, deleting, viewing) being handled by separate components.
- **Chakra UI**: Chakra UI is used to build clean and accessible UI components like forms, buttons, and modals. Chakra UI's responsive design features ensure the site is functional across various screen sizes.
- **State Management with Zustand**: Zustand is utilized to manage product data in the app's global state, allowing for real-time updates of the product list without needing to fetch from the server after each change.

## Learning and Implementation

- **Chakra UI**: Through this project, I learned how to efficiently use Chakra UI to design aesthetically pleasing and accessible user interfaces. It helped me focus on functionality while ensuring the design is visually consistent and user-friendly.
- **Zustand**: Zustand taught me how to manage the application’s state in a simpler, more efficient way compared to traditional state management tools like Redux. I gained hands-on experience in state manipulation without the boilerplate code.
- **MongoDB**: I learned how to set up and use MongoDB, ensuring data is properly stored and retrieved. This project helped me understand how to model product data and interact with a NoSQL database.
- **Node & Express**: I implemented RESTful APIs using Node.js and Express to handle product operations. This taught me how to build and structure backend endpoints for real-world applications.
- **Full-Stack Development**: This project was a great learning experience, as it allowed me to work on both the frontend and backend, connecting the two through API calls. I gained hands-on experience in building a full-stack application from start to finish.
