let qrCode = null;
let currentLogo = null;

const defaultOptions = {
    width: 500,
    height: 500,
    type: "canvas",
    data: "https://example.com",
    image: "",
    margin: 10,
    qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "M"
    },
    imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 5,
        crossOrigin: "anonymous",
    },
    dotsOptions: {
        color: "#000000",
        type: "square"
    },
    backgroundOptions: {
        color: "#ffffff",
    },
    cornersSquareOptions: {
        color: "#000000",
        type: "square"
    },
    cornersDotOptions: {
        color: "#000000",
        type: "square"
    }
};

let options = JSON.parse(JSON.stringify(defaultOptions));

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded - Initializing app");
    initTheme();
    qrCode = new QRCodeStyling(options);
    qrCode.append(document.getElementById('qr-code'));
    attachEventListeners();
    updateQRCode();
});

function attachEventListeners() {
    document.getElementById('generate-btn').addEventListener('click', updateQRCode);

    const inputs = [
        'qr-text', 'qr-size', 'qr-ecc', 'qr-color', 'bg-color', 
        'dot-pattern', 'dot-color', 'outer-corner', 'outer-color', 
        'inner-corner', 'inner-color', 'logo-size', 'logo-margin'
    ];
    
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => {
                if(el.type === 'color') {
                    const textEl = document.getElementById(id + '-text');
                    if(textEl) textEl.innerText = el.value.toUpperCase();
                }
                updateQRCode();
            });
        }
    });

    document.getElementById('logo-upload').addEventListener('change', handleLogoUpload);
}

function handleLogoUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        currentLogo = event.target.result;
        updateQRCode();
    };
    reader.readAsDataURL(file);
}

function updateQRCode() {
    options.data = document.getElementById('qr-text').value || "https://example.com";
    
    const size = parseInt(document.getElementById('qr-size').value);
    options.width = size;
    options.height = size;
    options.qrOptions.errorCorrectionLevel = document.getElementById('qr-ecc').value;
    
    const qrColor = document.getElementById('qr-color').value;
    const dotColor = document.getElementById('dot-color').value;
    options.backgroundOptions.color = document.getElementById('bg-color').value;
    
    options.dotsOptions.color = dotColor !== "#000000" ? dotColor : qrColor;
    options.dotsOptions.type = document.getElementById('dot-pattern').value;
    
    options.cornersSquareOptions.type = document.getElementById('outer-corner').value;
    options.cornersSquareOptions.color = document.getElementById('outer-color').value !== "#000000" ? document.getElementById('outer-color').value : qrColor;
    
    options.cornersDotOptions.type = document.getElementById('inner-corner').value;
    options.cornersDotOptions.color = document.getElementById('inner-color').value !== "#000000" ? document.getElementById('inner-color').value : qrColor;
    
    if (currentLogo) {
        options.image = currentLogo;
        options.imageOptions.imageSize = parseFloat(document.getElementById('logo-size').value);
        options.imageOptions.margin = parseInt(document.getElementById('logo-margin').value);
    } else {
        options.image = "";
    }

    qrCode.update(options);
}

function downloadQRCode() {
    if (qrCode) {
        qrCode.download({ name: "qr-code", extension: "png" });
    }
}

function downloadSVgQRCode() {
    if (qrCode) {
        qrCode.download({ name: "qr-code", extension: "svg" });
    }
}

function initTheme() {
    console.log("initTheme() called");
    const isDarkMode = localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    console.log("isDarkMode:", isDarkMode);
    
    if (isDarkMode) {
        document.documentElement.classList.add("dark");
        console.log("Added dark class to html");
    } else {
        document.documentElement.classList.remove("dark");
        console.log("Removed dark class from html");
    }
}

function toggleTheme() {
    console.log("toggleTheme() called");
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    console.log("Current dark state:", isDark);
    
    if (isDark) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
        console.log("Switched to Light Mode");
    } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
        console.log("Switched to Dark Mode");
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
        menu.classList.toggle("open");
    }
}
