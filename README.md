# Kh Shafin Farhan - Portfolio Website

## Files Included
- `index.html` - Main portfolio page
- `globe.html` - Interactive 3D globe showing countries visited
- `styles.css` - Styling for the portfolio
- `script.js` - JavaScript for smooth scrolling and navigation

## How to Run Locally

### Method 1: Simple File Opening (Recommended for Quick View)
1. Extract all files to a folder on your computer
2. Double-click `index.html` to open it in your default web browser
3. The website will work immediately!

### Method 2: Using Python's Built-in Web Server (Best for Full Functionality)
1. Extract all files to a folder on your computer
2. Open Terminal (Mac/Linux) or Command Prompt (Windows)
3. Navigate to the folder containing the files:
   ```
   cd /path/to/your/folder
   ```
4. Start a local web server:
   - **Python 3:**
     ```
     python -m http.server 8000
     ```
   - **Python 2:**
     ```
     python -m SimpleHTTPServer 8000
     ```
5. Open your web browser and go to: `http://localhost:8000`

### Method 3: Using Node.js http-server
1. Install http-server globally (one-time setup):
   ```
   npm install -g http-server
   ```
2. Navigate to the folder:
   ```
   cd /path/to/your/folder
   ```
3. Start the server:
   ```
   http-server
   ```
4. Open your browser to the address shown (usually `http://localhost:8080`)

### Method 4: Using VS Code Live Server Extension
1. Install Visual Studio Code
2. Install the "Live Server" extension
3. Open the folder containing the files in VS Code
4. Right-click on `index.html` and select "Open with Live Server"

## Features
- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Interactive Navigation:** Smooth scrolling between sections
- **3D Globe:** Realistic Earth with satellite imagery showing countries visited
- **Interactive Globe Controls:**
  - Drag to rotate the Earth
  - Scroll to zoom in/out
  - Auto-rotation when not interacting
  - Red pins marking visited countries with pulsing animation

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with WebGL support for the 3D globe

## Notes
- No installation or build process required
- All resources load from CDN (requires internet connection for the globe textures)
- The globe uses Three.js for 3D rendering
- Files are static HTML/CSS/JavaScript - no backend required

## Customization
- Edit `index.html` to update content
- Modify `styles.css` to change colors and styling
- Update country coordinates in `globe.html` to add/remove pins

## Troubleshooting
- If the globe doesn't load, check your internet connection (textures load from CDN)
- If images or styles are missing, ensure all files are in the same directory
- For the best experience, use a local web server (Methods 2-4) rather than just opening the HTML file

## Contact
For questions or updates, contact: khshafin@buffalo.edu
