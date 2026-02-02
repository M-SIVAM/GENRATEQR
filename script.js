let qrCode = null;
let logoImage = null;

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Color picker value display
document.querySelectorAll('input[type="color"]').forEach(input => {
    input.addEventListener('input', function() {
        const wrapper = this.closest('.color-input-wrapper');
        if (wrapper) {
            const valueSpan = wrapper.querySelector('.color-value');
            if (valueSpan) {
                valueSpan.textContent = this.value.toUpperCase();
            }
        }
    });
});

// Handle logo upload
document.getElementById('logo-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            logoImage = event.target.result;
            const preview = document.getElementById('logo-preview');
            preview.src = logoImage;
            preview.style.display = 'block';
            document.getElementById('remove-logo').style.display = 'inline-flex';
            
            // Update file upload label
            const label = document.querySelector('.file-upload-label span');
            label.textContent = file.name;
        };
        reader.readAsDataURL(file);
    }
});

function removeLogo() {
    logoImage = null;
    document.getElementById('logo-upload').value = '';
    document.getElementById('logo-preview').style.display = 'none';
    document.getElementById('remove-logo').style.display = 'none';
    
    // Reset label
    const label = document.querySelector('.file-upload-label span');
    label.textContent = 'Choose Image or Drag Here';
}

function generateQRCode() {
    const text = document.getElementById('qr-text').value.trim();
    const size = parseInt(document.getElementById('qr-size').value);
    const bgColor = document.getElementById('qr-bg-color').value;
    
    // Dot options
    const dotStyle = document.getElementById('dot-style').value;
    const dotColor = document.getElementById('dot-color').value;
    
    // Corner square options (the 3 big boxes)
    const cornerSquareStyle = document.getElementById('corner-square-style').value;
    const cornerSquareColor = document.getElementById('corner-square-color').value;
    
    // Corner dot options (inside the 3 boxes)
    const cornerDotStyle = document.getElementById('corner-dot-style').value;
    const cornerDotColor = document.getElementById('corner-dot-color').value;
    
    // Logo options
    const logoSize = parseFloat(document.getElementById('logo-size').value);
    const logoMargin = parseInt(document.getElementById('logo-margin').value);
    
    // Error correction (affects dot density)
    const errorCorrection = document.getElementById('error-correction').value;
    
    // Validate input
    if (!text) {
        alert('Please enter text or URL to generate QR code!');
        return;
    }
    
    // Clear previous QR code
    clearQRCode();
    
    // Get container
    const qrContainer = document.getElementById('qr-code');
    
    // Build QR code options
    const qrOptions = {
        width: size,
        height: size,
        type: "canvas",
        data: text,
        dotsOptions: {
            color: dotColor,
            type: dotStyle
        },
        cornersSquareOptions: {
            color: cornerSquareColor,
            type: cornerSquareStyle
        },
        cornersDotOptions: {
            color: cornerDotColor,
            type: cornerDotStyle
        },
        backgroundOptions: {
            color: bgColor
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: logoMargin,
            imageSize: logoSize,
            hideBackgroundDots: true
        },
        qrOptions: {
            errorCorrectionLevel: errorCorrection
        }
    };
    
    // Add logo if uploaded
    if (logoImage) {
        qrOptions.image = logoImage;
    }
    
    // Create new QR code with advanced styling
    qrCode = new QRCodeStyling(qrOptions);
    
    // Append to container
    qrCode.append(qrContainer);
    
    // Show action buttons
    document.getElementById('qr-actions').style.display = 'flex';
}

function downloadQRCode() {
    if (!qrCode) {
        alert('Please generate a QR code first!');
        return;
    }
    
    qrCode.download({
        name: "qrcode",
        extension: "png"
    });
}

function downloadSVG() {
    if (!qrCode) {
        alert('Please generate a QR code first!');
        return;
    }
    
    qrCode.download({
        name: "qrcode",
        extension: "svg"
    });
}

function clearQRCode() {
    const qrContainer = document.getElementById('qr-code');
    qrContainer.innerHTML = `
        <div class="qr-placeholder">
            <i class="fas fa-qrcode"></i>
            <p>Your QR Code will appear here</p>
        </div>
    `;
    qrCode = null;
    document.getElementById('qr-actions').style.display = 'none';
}

// Sync main color with all color pickers
document.getElementById('qr-color').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('dot-color').value = color;
    document.getElementById('corner-square-color').value = color;
    document.getElementById('corner-dot-color').value = color;
});

// Generate QR code on Enter key
document.getElementById('qr-text').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        generateQRCode();
    }
});

// Auto-generate on option change (optional - uncomment if desired)
// document.querySelectorAll('select, input[type="color"]').forEach(el => {
//     el.addEventListener('change', () => {
//         if (document.getElementById('qr-text').value.trim()) {
//             generateQRCode();
//         }
//     });
// });
