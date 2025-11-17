# MCA Study Portal

A comprehensive web-based study resource hub for MCA (Master of Computer Applications) students.

## 📚 Overview

This study portal provides organized access to course materials across multiple subjects, designed to help MCA students efficiently navigate and study their curriculum.

## 🗂️ Structure

### Available Subjects

1. **Full Stack Development**
   - Unit 1 (`Unit1.html`)
   - Unit 2 (`Unit2.html`)
   - Unit 3 (`Unit3.html`)
   - Unit 4 (`Unit4.html`)

2. **AI & ML** _(Coming Soon)_
   - Artificial Intelligence and Machine Learning resources

3. **Algorithm & Design (ADA)** _(Coming Soon)_
   - Algorithm design and analysis materials

## 🚀 Getting Started

1. Open `index.html` in your web browser
2. Navigate to the subject you want to study
3. Click on any unit to access the study materials

## 💻 Local Usage

Simply open the `index.html` file in any modern web browser:

```bash
# On Windows
start index.html

# Or double-click index.html in File Explorer
```

## 🌐 Deployment on Render

### Quick Deploy Steps:

1. **Install Dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Test Locally**:
   ```bash
   npm start
   ```
   Visit `http://localhost:3000` to verify everything works.

3. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for Render deployment"
   git push origin main
   ```

4. **Deploy on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `mca-study-portal` (or your choice)
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free
   - Click "Create Web Service"

5. **Access Your Site**:
   - Render will provide a URL like: `https://mca-study-portal.onrender.com`
   - Your site will be live in a few minutes!

### Other Hosting Options

- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Deploy with a single command
- **Any web server**: Upload all files to your hosting provider

## 📝 File Organization

```
Study Web site/
├── index.html          # Main homepage
├── Unit1.html          # Full Stack Unit 1
├── Unit2.html          # Full Stack Unit 2
├── Unit3.html          # Full Stack Unit 3
├── Unit3extra.html     # Full Stack Unit 3 Extra
├── Unit4.html          # Full Stack Unit 4
├── Unit4extra.html     # Full Stack Unit 4 Extra
├── server.js           # Express server for deployment
├── package.json        # Node.js dependencies
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🎨 Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with gradient themes
- **Easy Navigation**: Quick access to all study materials
- **Organized Content**: Materials grouped by subject area

## 🔧 Customization

To add new subjects or units:

1. Create your new HTML page
2. Edit `index.html` 
3. Add a link to your new page in the appropriate subject section

## 📌 Future Enhancements

- [ ] Add AI & ML course materials
- [ ] Add Algorithm & Design (ADA) materials
- [ ] Include search functionality
- [ ] Add dark mode toggle
- [ ] Progress tracking feature
- [ ] Interactive quizzes

## 👥 Contributing

Feel free to add more study materials, improve the design, or fix any issues.

## 📄 License

This is an educational resource. Feel free to use and modify as needed for your studies.

---

**Happy Learning! 🎓**
