# Personal Portfolio Website

## Overview
A modern, interactive personal portfolio website for Shekhar Nandanwar built with pure HTML, CSS, and JavaScript. Features smooth animations, mobile-responsive design, and a professional layout.

## Project Structure
- `index.html` - Main HTML file with all sections
- `styles.css` - Complete styling with animations and responsive design
- `script.js` - Interactive features and animations

## Sections
1. **Hero Section** - Animated gradient background with typing effect
2. **About** - Personal bio with profile image placeholder
3. **Skills** - Interactive skill cards
4. **Experience** - Timeline-based work history
5. **Projects** - Portfolio project showcase
6. **Contact** - Contact form with validation

## Customization Instructions

### Adding Your Profile Photo
1. Create an `assets` folder in the project root
2. Add your profile photo as `assets/profile.jpg`
3. In `index.html`, uncomment line 78 and comment out the placeholder div (lines 73-76)

### Adding Project Images
1. Save project images in `assets/` folder (e.g., `assets/project1.jpg`)
2. In `index.html`, uncomment the `<img>` tags in project cards
3. Replace placeholder divs with actual images

### Updating Content
All placeholder content is marked with `<!-- INSTRUCTION: ... -->` comments in the HTML file:
- Update your name, job title, and bio in the About section
- Add your actual work experience in the Experience section
- Add your projects in the Projects section
- Update contact information (email, phone, location)
- Modify skills based on your expertise

### Contact Form
The contact form currently logs data to console. To make it functional:
- Integrate with EmailJS, Formspree, or similar service
- Or connect to your own backend API
- Instructions in `script.js` line 205

## Technologies Used
- HTML5
- CSS3 (with custom properties and animations)
- Vanilla JavaScript
- Google Fonts (Poppins)
- Font Awesome Icons

## Features
- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Typing effect in hero section
- Interactive navigation
- Form validation
- Particle effects
- Gradient animations

## Recent Changes
- **2024-11-08**: Initial portfolio website created with all sections and animations

## User Preferences
- Pure HTML/CSS/JavaScript (no frameworks)
- Simple, clean, and engaging design
- Easy to customize with LinkedIn information
