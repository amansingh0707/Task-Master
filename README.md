<<<<<<< HEAD
# Task-Master
This is a Task Management System
=======
# Task Master - Complete Task Management System

A modern, full-stack task management application built with React, Node.js, Express, and MongoDB.

## Features

### Core Features
- ✅ User Authentication & Authorization (JWT)
- ✅ Complete CRUD operations for tasks
- ✅ Task status management (Todo, In Progress, Completed, Archived)
- ✅ Priority levels (Low, Medium, High, Urgent)
- ✅ Task filtering and search
- ✅ Subtasks and checklists
- ✅ Tags and categories
- ✅ Due date tracking
- ✅ Comments on tasks
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Analytics dashboard with charts

### Advanced Features
- 📊 Task analytics and statistics
- 🎨 Modern gradient UI with glassmorphism effects
- 🌙 Dark/Light theme toggle
- 📱 Mobile-first responsive design
- 🔍 Real-time search
- 📈 Visual charts and graphs (Recharts)
- 🎯 Priority and status filtering
- 📅 Due date tracking with overdue indicators

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **Recharts** - Charts and graphs
- **Lucide React** - Icons
- **React Toastify** - Notifications
- **date-fns** - Date formatting

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Validation
- **express-rate-limit** - Rate limiting

## Project Structure

```
task-master/
├── backend/
│   ├── src/
│   │   ├── config/         # Database and app configuration
│   │   ├── models/         # Mongoose models
│   │   ├── controllers/    # Route controllers
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── utils/          # Helper functions
│   │   └── server.js       # Entry point
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── auth/       # Authentication components
│   │   │   ├── layout/     # Layout components
│   │   │   ├── tasks/      # Task components
│   │   │   └── ui/         # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── utils/          # Helper functions
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── public/
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd "d:/Task Master"
```

2. **Set up the Backend**

```bash
cd backend
npm install
```

3. **Configure Backend Environment**

Edit `backend/.env` with your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

4. **Set up the Frontend**

```bash
cd ../frontend
npm install
```

5. **Configure Frontend Environment**

The `frontend/.env` file is already configured:

```env
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

1. **Start the Backend Server**

```bash
cd backend
npm run dev
```

The backend will run on http://localhost:5000

2. **Start the Frontend Development Server**

```bash
cd frontend
npm run dev
```

The frontend will run on http://localhost:3000

3. **Access the Application**

Open your browser and navigate to http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

### Tasks
- `GET /api/tasks` - Get all tasks (with filters)
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/status` - Update task status
- `POST /api/tasks/:id/subtasks` - Add subtask
- `POST /api/tasks/:id/comments` - Add comment
- `GET /api/tasks/analytics` - Get task analytics

## Features Overview

### Dashboard
- Task statistics overview
- Recent tasks display
- Quick task creation
- Productivity metrics

### Task Management
- Create, read, update, delete tasks
- Filter by status, priority
- Search across all fields
- Sort by various criteria
- Drag and drop (ready for implementation)

### Analytics
- Task completion rate
- Status distribution chart
- Priority breakdown
- Overdue task tracking
- Visual data representation

### User Profile
- Update profile information
- Change password
- Profile picture (ready for implementation)

## Design Highlights

- **Modern Gradient UI** - Beautiful gradient backgrounds and buttons
- **Glassmorphism** - Backdrop blur effects on cards
- **Dark Mode** - Full dark mode support with smooth transitions
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Fade-in, slide-up, and scale animations
- **Color-coded Priority** - Visual priority indicators
- **Professional Typography** - Inter font family

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation
- Rate limiting
- CORS configuration
- XSS protection

## Future Enhancements

- [ ] Drag and drop task reordering
- [ ] Calendar view
- [ ] File attachments
- [ ] Task sharing
- [ ] Email notifications
- [ ] Team collaboration
- [ ] Export tasks (PDF, CSV)
- [ ] Task templates
- [ ] Recurring tasks
- [ ] Mobile app

## Scripts

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Contributing

This is a personal project created for task management purposes. Feel free to fork and customize for your needs.

## License

ISC

## Author

Created with ❤️ using modern web technologies

---

**Note:** Make sure to update your MongoDB connection string in the `.env` file before running the application.
>>>>>>> d07046e (Added project files)
