# Chargepower Inc - Modern Bento Grid Website

A beautifully animated, responsive website for Chargepower Inc, featuring a modern bento grid layout that showcases battery energy storage systems and sustainable energy solutions.

## 🚀 Features

### Design & Layout
- **Modern Bento Grid**: Responsive grid layout that adapts to different screen sizes
- **Brand Colors**: Uses the official Chargepower Inc colors (#1629f4 & #04fe01)
- **Mobile-First**: Single column layout on mobile devices for optimal viewing
- **Smooth Animations**: Beautiful CSS animations and transitions throughout

### Interactive Elements
- **Animated Energy Grid**: Interactive battery cells with pulse animations
- **Hover Effects**: Cards lift and glow on hover with brand colors
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Validation**: Contact form with real-time validation

### Sections
1. **Hero Section**: Animated title with energy grid visualization
2. **Solutions Grid**: Bento-style cards showcasing different services
3. **About Section**: Company information with animated tech grid
4. **Contact Section**: Contact form with validation and info cards

## 🎨 Design System

### Colors
- **Primary Blue**: #1629f4
- **Primary Green**: #04fe01
- **Dark Background**: #0a0a0a
- **Card Background**: #1a1a1a
- **Text Primary**: #ffffff
- **Text Secondary**: #a0a0a0

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations
- **Slide In Up**: For text and content reveals
- **Pulse**: For energy cells and tech items
- **Battery Charge**: Animated battery level indicator
- **Leaf Float**: Sustainability section animations
- **Chart Growth**: Analytics preview animations

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 4-column bento grid
- **Tablet**: 2-column layout
- **Mobile**: Single column layout

### Mobile Features
- Collapsible navigation menu
- Optimized touch targets
- Simplified animations for performance
- Single column bento grid

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📁 File Structure

```
CP-Bento/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a modern web browser
3. **No build process required** - it's ready to use!

### Local Development

For local development, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎯 Key Features Explained

### Bento Grid System
The bento grid uses CSS Grid with different card sizes:
- **Large Cards**: 2x2 grid space
- **Medium Cards**: 2x1 grid space  
- **Small Cards**: 1x1 grid space

### Animation System
- **Intersection Observer**: Triggers animations when elements come into view
- **CSS Transitions**: Smooth state changes
- **Keyframe Animations**: Complex motion sequences
- **Performance Optimized**: Throttled scroll events and efficient animations

### Mobile Navigation
- **Hamburger Menu**: Animated toggle button
- **Slide Down**: Smooth menu reveal
- **Touch Friendly**: Large touch targets

## 🎨 Customization

### Changing Colors
Update the CSS custom properties in `styles.css`:

```css
:root {
    --primary-blue: #1629f4;
    --primary-green: #04fe01;
    /* ... other colors */
}
```

### Adding New Cards
To add a new bento card, follow this structure:

```html
<div class="bento-card [size]-card [theme]">
    <div class="card-content">
        <div class="card-icon">
            <i class="fas fa-[icon]"></i>
        </div>
        <h3>Card Title</h3>
        <p>Card description</p>
    </div>
</div>
```

### Animation Classes
- `large-card`, `medium-card`, `small-card`: Size classes
- `energy-storage`, `smart-grid`, `renewable`, etc.: Theme classes

## 🌟 Performance Features

- **Lazy Loading**: Animations trigger on scroll
- **Optimized Animations**: Hardware-accelerated transforms
- **Throttled Events**: Scroll events are throttled for performance
- **Efficient CSS**: Minimal repaints and reflows

## 📞 Support

For questions or support regarding this website, please contact:
- **Email**: info@chargepower.com
- **Phone**: +1 (555) 123-4567

## 📄 License

This project is created for Chargepower Inc. All rights reserved.

---

**Built with ❤️ for sustainable energy solutions** 