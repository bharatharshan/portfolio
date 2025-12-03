const projects = [
  {
    slug: "grocymart",
    title: "GrocyMart— Grocery Commerce Application",
    stack: "React, Vite, Django, MySQL",
    bullets: [
      "Developed a full-stack grocery commerce platform with catalog, cart, checkout, and admin dashboard features.",
      "Built a React + Vite frontend backed by a Django REST API powered by MySQL for transactional data integrity.",
      "Built secure SPA authentication using JWT, context-based state, and Axios token refresh."
    ],
    tags: ["React", "Vite", "Django", "MySQL", "JWT", "Axios"],
    cover: "/assets/Grocymart.png",
    live: null,
    repo: null
  },
  {
    slug: "pharmacare",
    title: "PharmaCare— Medical Store Management System",
    stack: "Django Framework",
    bullets: [
      "Developed a web application for managing medical store inventory, customer orders, and billing.",
      "Utilized Django's built-in ORM for efficient database management and CRUD operations.",
      "Implemented a responsive and clean interface to streamline user interactions and improve overall functionality."
    ],
    tags: ["Django", "ORM"],
    cover: "/assets/pharmainventory.png",
    images: ["/assets/pharmainventory.png", "/assets/pharmaorder.png"],
    live: null,
    repo: null
  },
  {
    slug: "ideator",
    title: "Ideator— Project Idea Recommendation System",
    stack: "HTML, CSS, JavaScript",
    bullets: [
      "Built a web application to suggest project ideas based on user preferences and predefined criteria.",
      "Designed an intuitive front-end interface for seamless user interaction and easy navigation.",
      "Enhanced user experience by integrating dynamic content updates and filtering options."
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    cover: "/assets/ideator.jpeg",
    live: null,
    repo: null
  },
  {
    slug: "bikebay",
    title: "BikeBay— Motorcycle Inventory Store",
    stack: "Angular, Express.js, MongoDB",
    bullets: [
      "Developed a full-stack web application for managing motorcycle inventory and customer bookings.",
      "Built the application using an Angular frontend and an Express.js backend integrated with MongoDB for data storage and management.",
      "Utilized Mongoose ODM for efficient schema modeling and data validation in MongoDB."
    ],
    tags: ["Angular", "Express.js", "MongoDB", "Mongoose"],
    cover: "/assets/motobike2.png",
    live: null,
    repo: null
  }
];
export default projects;