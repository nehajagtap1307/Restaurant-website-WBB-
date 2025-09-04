# The Warm Bowl Bliss - Restaurant Website

A modern, responsive restaurant website built with HTML, CSS, JavaScript, and Node.js backend. This website showcases all the essential features a restaurant needs to present their business online, including a functional reservation system with database storage.

## 🌟 Features

### Core Pages
- **Home Page** - Welcome message, hero section, and call-to-action buttons
- **Menu Page** - Interactive menu with filtering by categories (Starters, Main Course, Desserts, Drinks)
- **About Us** - Restaurant story, history, and chef introduction
- **Reservations** - Online booking form with validation
- **Order Online** - Takeaway and delivery options
- **Gallery** - Photo gallery with lightbox functionality
- **Reviews** - Customer testimonials and ratings
- **Events & Offers** - Special events and promotions
- **Contact** - Contact information, form, and social media links

### Technical Features
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Modern UI/UX** - Beautiful gradients, shadows, and smooth animations
- **Interactive Elements** - Menu filtering, form handling, gallery lightbox
- **Smooth Scrolling** - Navigation with smooth scroll to sections
- **Mobile Menu** - Hamburger menu for mobile devices
- **Form Validation** - Reservation and contact forms with user feedback
- **Scroll Animations** - Fade-in effects as content comes into view
- **Cross-browser Compatible** - Works on all modern browsers
- **Backend API** - Node.js/Express server for handling reservations
- **Database Storage** - MongoDB for storing reservation data

##  Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

### Installation
1. Clone or download this repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Make sure MongoDB is running locally on port 27017 (or update the connection string in `server.js`)
4. Start the server
   ```bash
   npm start
   ```
5. Open `http://localhost:5000` in your browser or open `index.html` directly

### File Structure
```
warm-bowl-bliss/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript functionality
├── images/             # Image assets directory
│   ├── menu/          # Menu item images
│   ├── gallery/       # Gallery images
│   └── placeholder-food.jpg  # Fallback image
├── server.js          # Backend server with Express
├── package.json       # Project dependencies
└── README.md          # This file
```

## 🎨 Customization

### Colors
The website uses a modern color scheme that can be easily customized in `css/style.css`:
- Primary: `#e74c3c` (Red)
- Secondary: `#f39c12` (Orange)
- Dark: `#2c3e50` (Dark Blue)
- Light: `#f8f9fa` (Light Gray)

### Content
- Update restaurant information in `index.html`
- Modify menu items in `js/script.js` under the `menuData` array
- Replace placeholder images with actual restaurant photos
- Update contact information and social media links

### Styling
- Modify CSS variables and classes in `css/style.css`
- Adjust breakpoints for responsive design
- Customize animations and transitions

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📸 Image Requirements

For optimal performance, use images with these specifications:
- **Hero Image**: 800x600px or larger
- **Menu Images**: 400x300px
- **Gallery Images**: 600x400px
- **Format**: JPG or PNG
- **Optimization**: Compress images for web use

## 🚀 Deployment

### Backend API

The website includes a backend API for handling reservations:

- **POST /api/reservations**: Create a new reservation
- **GET /api/reservations**: Get all reservations (admin feature)

### Database Schema

Reservations are stored in MongoDB with the following structure:

- **name**: Customer's full name
- **email**: Customer's email address
- **phone**: Customer's phone number
- **date**: Reservation date
- **time**: Reservation time
- **guests**: Number of guests
- **specialRequests**: Any special requests (optional)

### Development Mode

To run the server with automatic restart on file changes:

```bash
npm run dev
```

### Local Development
Simply open `index.html` in a web browser for local development and testing.




##  Future Enhancements

Potential features to add:
- **Online Ordering System** - Full e-commerce integration
- **Table Management** - Real-time table availability
- **Customer Reviews** - Dynamic review system
- **Newsletter Signup** - Email marketing integration
- **Blog Section** - Restaurant news and updates
- **Multi-language Support** - Internationalization
- **SEO Optimization** - Meta tags and structured data
- **Analytics Integration** - Google Analytics setup









