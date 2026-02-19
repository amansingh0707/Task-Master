# Task Master - Setup Guide

## 🚀 Quick Start Guide

### Prerequisites
- Node.js v16+ installed
- MongoDB Atlas account (or local MongoDB instance)
- Code editor (VS Code recommended)

---

## 📦 Installation Steps

### 1. Configure MongoDB

**Option A: MongoDB Atlas (Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password

**Option B: Local MongoDB**
- Install MongoDB locally
- Use connection string: `mongodb://localhost:27017/taskmaster`

### 2. Backend Setup

```bash
# Navigate to backend folder
cd "d:/Task Master/backend"

# Install dependencies (if not already done)
npm install

# Update .env file with your MongoDB connection
# Edit backend/.env and replace the MONGODB_URI with your actual connection string
```

**Edit `backend/.env`:**
```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/taskmaster
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
PORT=5000
NODE_ENV=development
```

### 3. Frontend Setup

```bash
# Navigate to frontend folder
cd "d:/Task Master/frontend"

# Install dependencies
npm install
```

The frontend `.env` is already configured for local development.

---

## 🎯 Running the Application

### Start Backend Server

Open a terminal and run:
```bash
cd "d:/Task Master/backend"
npm run dev
```

✅ Backend should start on **http://localhost:5000**

### Start Frontend Server

Open a **NEW** terminal and run:
```bash
cd "d:/Task Master/frontend"
npm run dev
```

✅ Frontend should start on **http://localhost:3000**

---

## 🔐 First Time Usage

1. **Open browser**: Navigate to `http://localhost:3000`
2. **Register**: Click "Register here" and create an account
3. **Login**: Use your credentials to login
4. **Start using**: Create your first task!

---

## 📋 Features Checklist

### Authentication
- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Profile Management

### Task Management
- ✅ Create Tasks
- ✅ Edit Tasks
- ✅ Delete Tasks
- ✅ View Task Details
- ✅ Task Status (Todo, In Progress, Completed, Archived)
- ✅ Priority Levels (Low, Medium, High, Urgent)
- ✅ Due Dates
- ✅ Tags
- ✅ Subtasks
- ✅ Comments

### Advanced Features
- ✅ Search Tasks
- ✅ Filter by Status
- ✅ Filter by Priority
- ✅ Sort Tasks
- ✅ Analytics Dashboard
- ✅ Dark Mode
- ✅ Responsive Design

---

## 🎨 Design Features

- Modern gradient UI with purple/blue theme
- Glassmorphism effects
- Smooth animations and transitions
- Dark mode support
- Mobile-first responsive design
- Color-coded priority indicators
- Professional typography (Inter font)

---

## 🔧 Troubleshooting

### Backend won't start
- Check MongoDB connection string in `.env`
- Ensure MongoDB Atlas IP whitelist includes your IP (or use 0.0.0.0/0 for development)
- Verify Node.js version: `node --version` (should be v16+)

### Frontend won't start
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check if port 3000 is available

### Can't connect to backend
- Ensure backend is running on port 5000
- Check `frontend/.env` has correct `VITE_API_URL`
- Check browser console for CORS errors

### MongoDB Connection Issues
- Verify connection string is correct
- Check network access in MongoDB Atlas
- Ensure database user has correct permissions

---

## 📚 API Endpoints

### Authentication
```
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - Login user
GET    /api/auth/me           - Get current user
PUT    /api/auth/profile      - Update profile
```

### Tasks
```
GET    /api/tasks             - Get all tasks (with filters)
GET    /api/tasks/:id         - Get single task
POST   /api/tasks             - Create task
PUT    /api/tasks/:id         - Update task
DELETE /api/tasks/:id         - Delete task
PATCH  /api/tasks/:id/status  - Update status
POST   /api/tasks/:id/subtasks - Add subtask
POST   /api/tasks/:id/comments - Add comment
GET    /api/tasks/analytics   - Get analytics
```

---

## 🔐 Security Features

- JWT-based authentication with 7-day expiry
- Password hashing with bcrypt (10 salt rounds)
- Protected API routes
- Input validation
- Rate limiting (5 login attempts per 15 min)
- CORS configuration
- Secure HTTP headers

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🎯 Next Steps

1. **Start both servers** (backend and frontend)
2. **Create an account** on the register page
3. **Create your first task** from the dashboard
4. **Explore features** - try filters, search, analytics
5. **Toggle dark mode** using the moon/sun icon
6. **Update your profile** in the profile page

---

## 💡 Tips

- Use tags to organize tasks by project or category
- Set due dates to track deadlines
- Use priority levels to focus on important tasks
- Check analytics to track your productivity
- Use subtasks for breaking down complex tasks
- Filter and search to quickly find tasks

---

## 🐛 Known Issues

- react-beautiful-dnd is deprecated (ready for replacement with @dnd-kit if needed)
- Some npm packages have security advisories (non-critical, can be updated)

---

## 📞 Support

For issues or questions:
1. Check this guide first
2. Review README.md
3. Check browser console for errors
4. Check backend terminal for errors

---

## 🎉 Enjoy Task Master!

Your complete task management solution is ready to use. Start organizing your tasks efficiently!
