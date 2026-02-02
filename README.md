# QR Code Generator 🔲

A **free, fast, and fully customizable** online QR code generator with stunning design features. Create beautiful QR codes with custom colors, patterns, logos, and more!

**Live Demo:** [View Here](https://anura4g.github.io/GENRATEQR/)

---

## ✨ Features

✅ **100% Free** - No signup, no limits, no hidden charges  
✅ **Fully Customizable** - Colors, patterns, dots, corners  
✅ **Logo Support** - Add your brand logo in the center  
✅ **Multiple Formats** - Download as PNG or SVG  
✅ **Dark Mode** - Eye-friendly dark theme  
✅ **Responsive Design** - Works on desktop, tablet, mobile  
✅ **Privacy First** - All processing done in your browser, no data stored  
✅ **Instant Preview** - Real-time QR code generation  

---

## 🚀 Quick Start

### Option 1: Use Online (No Installation)
1. Go to [QR Generator](https://anura4g.github.io/GENRATEQR/)
2. Enter your URL or text
3. Customize and download

### Option 2: Run Locally
1. Clone the repository:
```bash
git clone https://github.com/ANURA4G/GENRATEQR.git
cd GENRATEQR
```

2. Open `index.html` in your browser:
   - **Windows:** Double-click `index.html`
   - **Mac/Linux:** `open index.html` or `python -m http.server 8000`

That's it! No installation needed.

---

## 📁 Project Structure

```
GENRATEQR/
├── index.html          # Main HTML file (UI structure)
├── style.css           # All styling & animations
├── script.js           # JavaScript logic & functionality
└── README.md           # This file
```

### What Each File Does:

**index.html**
- Contains the page structure (header, sections, buttons)
- Includes form inputs for QR customization
- Loads external libraries and stylesheets

**style.css**
- Beautiful gradient backgrounds
- Responsive grid layouts
- Dark mode support
- Smooth animations and transitions
- Mobile-friendly design

**script.js**
- Handles QR code generation
- Manages color pickers and inputs
- Logo upload and preview
- Dark mode toggle
- Download functionality

---

## 🎨 How to Use

### Basic Usage
1. **Enter Content** - Type URL, text, phone number, email, etc.
2. **Set Size** - Choose from Small, Medium, Large, Extra Large
3. **Pick Density** - Low (fewer dots) to Maximum (most dots)
4. **Choose Colors** - Select QR color and background
5. **Generate** - Click "Generate QR Code"
6. **Download** - Save as PNG or SVG

### Advanced Customization

#### Dot Patterns
- **Square** - Traditional square dots
- **Dots** - Rounded circular dots
- **Rounded** - Rounded squares
- **Extra Rounded** - Very smooth look
- **Classy** - Stylish pattern
- **Classy Rounded** - Smooth classy look

#### Corner Styles (3 Big Detection Boxes)
- **Square** - Traditional sharp corners
- **Rounded** - Slightly rounded
- **Extra Rounded** - Very rounded, modern look

#### Inner Corners (Small squares inside detection boxes)
- **Square** - Sharp inner corners
- **Rounded** - Smooth inner corners

#### Logo/Image in Center
1. Click "Choose Image or Drag Here"
2. Select your logo (PNG, JPG, SVG)
3. Adjust size (20%, 30%, 40%)
4. Set margin around logo
5. Generate to see preview

---

## 💻 Customization Guide for Developers

### Change Colors Scheme
Open `style.css` and modify the CSS variables at the top:

```css
:root {
    --primary: #667eea;           /* Main brand color */
    --secondary: #764ba2;          /* Accent color */
    --accent: #38ef7d;             /* Highlight color */
    --bg-light: #f8fafc;           /* Light background */
    --bg-dark: #0f172a;            /* Dark background */
    /* ... more colors ... */
}
```

### Change Logo Upload Size Limit
Open `script.js` and add file size validation:

```javascript
const maxSize = 5 * 1024 * 1024; // 5MB limit
if (file.size > maxSize) {
    alert('File too large! Max 5MB');
    return;
}
```

### Add More Dot Patterns
The QRCodeStyling library supports these patterns:
- square
- dots
- rounded
- extra-rounded
- classy
- classy-rounded

### Change Default QR Settings
Open `script.js` and modify the `qrOptions` object:

```javascript
const qrOptions = {
    width: 300,                    // Default width
    height: 300,                   // Default height
    errorCorrectionLevel: 'H',     // Error correction level (L, M, Q, H)
    // ... more options ...
};
```

---

## 🌐 Deployment

### Deploy to GitHub Pages (Free)

1. **Already done!** Your repo is ready
2. Go to: https://github.com/ANURA4G/GENRATEQR/settings/pages
3. Select **main** branch as source
4. Your site goes live at: `https://anura4g.github.io/GENRATEQR/`

### Deploy to Netlify (Free)

1. Go to [Netlify](https://netlify.com)
2. Click "Deploy manually"
3. Drag and drop your folder
4. Get a live URL instantly

### Deploy to Vercel (Free)

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import from GitHub
4. Deploy with one click

### Deploy to Any Web Host

Simply upload these 3 files via FTP/File Manager:
- `index.html`
- `style.css`
- `script.js`

---

## 📱 Browser Support

✅ Chrome/Chromium (Latest)  
✅ Firefox (Latest)  
✅ Safari (Latest)  
✅ Edge (Latest)  
✅ Mobile Browsers  

---

## 🔧 Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, flexbox/grid
- **JavaScript (Vanilla)** - Pure JS, no frameworks
- **QRCode Styling Library** - For advanced QR customization
- **Font Awesome** - Icons throughout the app

### External Libraries

```html
<!-- QR Code Library -->
<script src="https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js"></script>

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

---

## 🐛 Troubleshooting

### QR Code Not Generating
- **Check:** Text field is not empty
- **Check:** Browser console for errors (F12)
- **Try:** Refresh the page and try again

### Logo Not Showing in QR
- **Use:** High error correction level (Medium or higher)
- **Check:** Logo file is valid image format
- **Note:** Logo takes up space, QR data still readable

### Download Not Working
- **Check:** Browser allows downloads
- **Try:** Different format (PNG or SVG)
- **Note:** SVG is vector (scalable), PNG is raster (fixed size)

### Dark Mode Not Persisting
- **Note:** Uses browser localStorage
- **Check:** Browser allows local storage
- **Try:** Clear cookies/cache and try again

---

## 📚 Learning Resources

### For Beginners
- Want to modify colors? → Edit the CSS variables in `style.css`
- Want to add a button? → Add it in `index.html` and create a function in `script.js`
- Want to change text? → Find it in `index.html` and replace

### For Intermediate
- Study how `QRCodeStyling` library works - read the [docs](https://github.com/kozakdenys/qr-code-styling)
- Learn about error correction levels in QR codes
- Experiment with CSS Grid and Flexbox layouts

### For Advanced
- Add backend storage with Firebase/Supabase
- Create QR code history/gallery
- Add bulk QR generation
- Create API endpoint for QR generation

---

## 💡 Feature Ideas

Looking to contribute? Here are some ideas:

- [ ] QR Code History (save recently created)
- [ ] Batch QR Generation (create multiple at once)
- [ ] QR Code Analytics (track scans)
- [ ] Custom domain support for QR tracking
- [ ] Share QR codes directly to social media
- [ ] Import/Export settings as JSON
- [ ] Preset templates for common use cases
- [ ] Real-time preview as you type

---

## 📝 License

This project is **free to use**, **modify**, and **distribute**.  
No attribution required, but appreciated!

---

## 👤 Author

Created for **HACKFEST 2K26**  
By: **Anuraag S**

---

## 🙏 Support

If you found this useful:
- ⭐ Star the repository
- 🍴 Fork and customize
- 🐛 Report bugs via GitHub Issues
- 💬 Share feedback

---

## 📞 Questions?

Check the troubleshooting section above or create an [issue](https://github.com/ANURA4G/GENRATEQR/issues).

---

## 🎉 Thank You!

Happy QR code generating! 🚀

Made with ❤️ for hackers and developers.
