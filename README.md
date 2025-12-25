# Personal Website

A modern, SEO-optimized personal website built with clean HTML, CSS, and vanilla JavaScript. This site serves as a hub for showcasing projects, products, and professional presence.

## ✨ Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph tags, and JSON-LD structured data
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Fast Loading**: Zero dependencies, pure HTML/CSS/JS for optimal performance
- **Accessible**: WCAG compliant with semantic HTML and keyboard navigation support
- **Modern UI**: Clean, professional design with smooth animations
- **Easy to Customize**: Simple structure with clear placeholders for your content

## 📁 Project Structure

```
the-real-hulk/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   └── main.js         # Interactive features and animations
├── assets/
│   └── images/         # Your images, logos, and media files
└── README.md           # This file
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Customize** the content in `index.html` (see customization guide below)
3. **Add your images** to the `assets/images/` folder
4. **Test locally** by opening `index.html` in your browser
5. **Deploy** to your hosting platform of choice

## 🎨 Customization Guide

### 1. Update Personal Information

In `index.html`, replace the following placeholders:

#### Meta Tags (lines 10-31)
- `Your Name` → Your actual name
- `https://yourwebsite.com/` → Your actual domain
- Update the description and keywords
- Add your social media preview image path

#### Hero Section (lines 68-85)
- Update your name and tagline
- Customize the introduction text
- Modify call-to-action buttons if needed

#### About Section (lines 88-103)
- Write your personal bio
- Highlight your expertise and interests

### 2. Add Your Projects

In the Projects section (lines 106-186), for each project card:

```html
<article class="project-card">
    <div class="project-header">
        <h3 class="project-title">Your Project Name</h3>
        <span class="project-tag">Category</span>
    </div>
    <p class="project-description">
        Description of your project...
    </p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
    <div class="project-links">
        <a href="GITHUB_URL">GitHub</a>
        <a href="DEMO_URL">Live Demo</a>
    </div>
</article>
```

**To add more projects**: Copy an entire `<article class="project-card">` block and paste it within the `projects-grid` div.

### 3. Add Your Products

In the Products section (lines 189-245), for each product card:

```html
<article class="product-card">
    <div class="product-icon">🚀</div>
    <h3 class="product-title">Product Name</h3>
    <p class="product-description">
        Product description...
    </p>
    <a href="PRODUCT_URL" class="product-link">
        Learn More →
    </a>
</article>
```

**Emoji icons**: Change the emoji in `product-icon` to match your product (🎨 💼 🔧 📱 ⚡ etc.)

### 4. Update Social Links

In the Contact section (lines 248-290), update each social link:

```html
<a href="YOUR_GITHUB_URL" class="social-link">
    <!-- SVG icon -->
    GitHub
</a>
```

Available social links:
- GitHub
- LinkedIn
- Twitter
- Email

**To add more social links**: Copy a `<a class="social-link">` block and update the href, aria-label, SVG icon, and text.

### 5. Customize Colors

In `css/styles.css` (lines 1-50), modify the CSS variables:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --dark: #0f172a;               /* Text color */
    /* ... more variables ... */
}
```

### 6. Add Your Images

1. **Profile Picture**: Add to `assets/images/` and reference in hero section
2. **Favicon**: Create a `favicon.png` (32x32 or 64x64) in `assets/images/`
3. **Open Graph Image**: Create `og-image.jpg` (1200x630) for social media previews

Update image paths in `index.html`:
```html
<!-- Line 34 - Favicon -->
<link rel="icon" type="image/png" href="/assets/images/favicon.png">

<!-- Lines 20 & 25 - OG Image -->
<meta property="og:image" content="https://yourwebsite.com/assets/images/og-image.jpg">
```

## 🔧 Advanced Customization

### Modify the Hero Gradient

In `css/styles.css` (line 256), change the gradient colors:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try these gradient generators:
- [CSS Gradient](https://cssgradient.io/)
- [UI Gradients](https://uigradients.com/)

### Add New Sections

1. Copy an existing section structure
2. Add a new nav link in the header
3. Update the section id and content
4. Style it in `styles.css` if needed

### Customize Animations

In `js/main.js`, modify the scroll animation options (line 107):

```javascript
const observerOptions = {
    threshold: 0.1,        // When 10% visible
    rootMargin: '0px 0px -50px 0px'  // Trigger point
};
```

## 📱 Testing

### Local Testing
Simply open `index.html` in your browser. For best results, use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx serve

# Then visit http://localhost:8000
```

### Responsive Testing
- Chrome DevTools: F12 → Toggle Device Toolbar
- Test on actual devices
- Use tools like [Responsive Design Checker](https://responsivedesignchecker.com/)

## 🌐 Deployment

This website can be deployed to any static hosting platform:

### GitHub Pages
1. Push to a GitHub repository
2. Go to Settings → Pages
3. Select branch and save
4. Visit `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your folder to [Netlify](https://app.netlify.com/)
2. Or connect your Git repository
3. Automatic deployments on every push

### Vercel
```bash
npm i -g vercel
vercel
```

### Other Options
- Cloudflare Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Firebase Hosting

## 📊 SEO Checklist

- [x] Semantic HTML5 elements
- [x] Meta description (< 160 characters)
- [x] Open Graph tags for social sharing
- [x] JSON-LD structured data
- [x] Mobile-friendly / responsive
- [x] Fast loading (no heavy dependencies)
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Alt text for images (add when you include images)
- [x] Sitemap.xml (optional - add after deployment)
- [x] robots.txt (optional - add if needed)

## 🎯 Performance Tips

1. **Optimize images**: Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
2. **Use WebP format**: Modern image format with better compression
3. **Lazy load images**: Add `loading="lazy"` to img tags
4. **Minimize CSS/JS**: Use tools like [cssnano](https://cssnano.co/) for production
5. **Enable caching**: Configure on your hosting platform

## 🐛 Troubleshooting

### Links not working
- Ensure all href paths are correct
- Check for typos in section IDs

### Styles not applying
- Verify CSS file path in index.html
- Check browser console for errors
- Clear browser cache

### JavaScript not working
- Check browser console for errors
- Ensure js/main.js path is correct
- Verify script tag is before closing `</body>`

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Support

If you need help customizing this website, feel free to:
- Open an issue
- Check the comments in the code files
- Refer to this README

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
