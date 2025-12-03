# Deployment Guide - StudyPortal Bihar

This guide will help you deploy your StudyPortal Bihar website to various hosting platforms.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All files are in the project root directory
- [ ] Links between pages are correct (home.html ↔ index.html)
- [ ] Images and assets are loading properly
- [ ] Font Awesome CDN link is working
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] All social media links are functional
- [ ] LocalStorage features work correctly

---

## 🌐 Hosting Options

### Option 1: GitHub Pages (Recommended - FREE)

#### Step 1: Create GitHub Repository
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: StudyPortal Bihar website"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/studyportal-bihar.git
git branch -M main
git push -u origin main
```

#### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/studyportal-bihar/`

#### Step 3: Set Default Page
- Rename `home.html` to `index.html` (make current index.html → quiz.html)
- Update all navigation links accordingly
- Or add a redirect in a new `index.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0; url=home.html">
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to homepage...</p>
</body>
</html>
```

---

### Option 2: Netlify (FREE with Custom Domain)

#### Method A: Drag & Drop
1. Visit [netlify.com](https://netlify.com)
2. Sign up for free account
3. Drag your project folder to the deploy area
4. Your site is live instantly!

#### Method B: Git Integration
1. Push code to GitHub (see Option 1, Step 1)
2. Sign in to Netlify with GitHub
3. Click **New site from Git**
4. Select your repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. Click **Deploy site**

#### Configure Redirects (Optional)
Create `_redirects` file in root:
```
/              /home.html     200
/quiz          /index.html    200
```

---

### Option 3: Vercel (FREE)

1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **Import Project**
4. Select your GitHub repository
5. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: ./
6. Click **Deploy**

---

### Option 4: Traditional Web Hosting

#### Via FTP/cPanel
1. Get hosting from any provider (Hostinger, Bluehost, etc.)
2. Access cPanel or FTP client
3. Upload all files to `public_html` or `www` directory
4. Ensure file permissions are correct (644 for files, 755 for directories)
5. Visit your domain

#### File Structure on Server:
```
public_html/
├── home.html
├── home-style.css
├── home-script.js
├── index.html (quiz)
├── style.css
├── script.js
├── questions.js
├── logo.svg
└── (other files)
```

---

## 🔧 Configuration

### Update Base URL
If deploying to subdirectory, update links:

**Before:**
```html
<a href="home.html">Home</a>
<a href="index.html">Quiz</a>
```

**After:**
```html
<a href="/studyportal/home.html">Home</a>
<a href="/studyportal/index.html">Quiz</a>
```

### Social Share URLs
Update in `script.js` and `home-script.js`:
```javascript
// Change from:
const shareUrl = window.location.href;

// To your actual URL:
const shareUrl = "https://your-domain.com/studyportal";
```

---

## 🎯 SEO Optimization

### Add Meta Tags
Add to `<head>` of both HTML files:

```html
<!-- Primary Meta Tags -->
<meta name="title" content="StudyPortal Bihar - Interactive CS Quiz">
<meta name="description" content="Master Computer Science with interactive MCQ quizzes. Inspired by Bihar's cultural heritage. IIT Kanpur syllabus based questions.">
<meta name="keywords" content="CS quiz, Computer Science, Bihar, IIT Kanpur, MCQ, Education, Programming">
<meta name="author" content="Prabhat Kumar">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://your-domain.com/">
<meta property="og:title" content="StudyPortal Bihar - Interactive CS Quiz">
<meta property="og:description" content="Master Computer Science with interactive MCQ quizzes.">
<meta property="og:image" content="https://your-domain.com/logo.svg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://your-domain.com/">
<meta property="twitter:title" content="StudyPortal Bihar - Interactive CS Quiz">
<meta property="twitter:description" content="Master Computer Science with interactive MCQ quizzes.">
<meta property="twitter:image" content="https://your-domain.com/logo.svg">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="logo.svg">
```

### Create robots.txt
```
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

### Create sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/home.html</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-domain.com/index.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 📊 Analytics Setup

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID
3. Add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 Security Best Practices

### HTTPS
- Most modern hosts provide free SSL (Let's Encrypt)
- Enable HTTPS in hosting control panel
- Force HTTPS redirect

### Content Security Policy
Add to `<head>`:
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
               style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
               font-src 'self' https://cdnjs.cloudflare.com;">
```

---

## 🚀 Performance Optimization

### 1. Enable Compression
Create `.htaccess` file (Apache servers):
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### 2. Browser Caching
Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>
```

### 3. Minify Files (Optional)
Before deployment, minify CSS and JS:
- Use online tools or build tools
- Save minified versions as `.min.css` and `.min.js`
- Update HTML links

---

## 🧪 Testing After Deployment

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] Navigation between pages works
- [ ] Quiz starts and functions properly
- [ ] Answers can be selected
- [ ] Timer works
- [ ] Results display correctly
- [ ] Social share buttons work
- [ ] Feedback form submits
- [ ] LocalStorage persists data
- [ ] Best score updates

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Mobile Testing
- [ ] Responsive design works
- [ ] Touch interactions work
- [ ] Mobile menu functions
- [ ] Buttons are tap-friendly
- [ ] Text is readable

### Performance Testing
- Use tools:
  - [Google PageSpeed Insights](https://pagespeed.web.dev/)
  - [GTmetrix](https://gtmetrix.com/)
  - [WebPageTest](https://www.webpagetest.org/)

---

## 🎯 Post-Deployment

### 1. Submit to Search Engines
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### 2. Monitor Performance
- Set up Google Analytics
- Check error logs regularly
- Monitor user feedback

### 3. Regular Updates
- Add new questions to `questions.js`
- Update content based on user feedback
- Fix any reported bugs

---

## 📱 Custom Domain (Optional)

### Buy Domain
- Namecheap, GoDaddy, Google Domains, etc.
- Choose something memorable: `studyportalbihar.com`

### Connect to Hosting
1. Get nameservers from hosting provider
2. Update domain DNS settings
3. Wait 24-48 hours for propagation

---

## 🆘 Troubleshooting

### Site Not Loading
- Check file paths are correct
- Ensure index.html exists in root
- Verify hosting is active

### Styles Not Applied
- Check CSS file paths
- Clear browser cache
- Verify file uploaded correctly

### JavaScript Not Working
- Check browser console for errors
- Ensure script files are uploaded
- Verify Font Awesome CDN loads

### Social Share Broken
- Update URLs to production domain
- Test each platform individually
- Check browser console

---

## ✅ Deployment Checklist

Final checks before going live:
- [ ] All files uploaded
- [ ] Links tested and working
- [ ] Mobile responsive verified
- [ ] Cross-browser tested
- [ ] HTTPS enabled
- [ ] Analytics configured
- [ ] SEO meta tags added
- [ ] Social share working
- [ ] Performance optimized
- [ ] Backup created

---

## 📞 Support

Need help with deployment?
- Check hosting provider documentation
- Search Stack Overflow
- Contact hosting support

---

**🎉 Congratulations!**

Your StudyPortal Bihar website is now live and ready to help students learn Computer Science!

**Made with ❤️ by Prabhat Kumar**

*Share the knowledge, celebrate Bihar's heritage!*
