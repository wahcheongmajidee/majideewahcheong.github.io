# Components Folder

This folder contains reusable components for the Kedai Basikal Wah Cheong website.

## Structure

```
components/
├── header.html          # Header component with logo, title, and navigation
├── footer.html          # Footer component with contact information
├── components.css       # Shared styles for header and footer
├── componentLoader.js   # JavaScript to load components dynamically
└── README.md           # This documentation file
```

## Components

### Header Component (`header.html`)
- Logo and title
- Facebook link
- Navigation menu (HOME, ABOUT US, HISTORY, PRODUCTS)
- Responsive design with mobile menu support

### Footer Component (`footer.html`)
- Additional information section
- Contact details (address, phone, Facebook)
- Copyright notice
- Responsive grid layout

## Usage

### In HTML Files
1. Add placeholder elements:
   ```html
   <!-- Header Component Placeholder -->
   <div id="header-placeholder"></div>
   
   <!-- Your page content here -->
   
   <!-- Footer Component Placeholder -->
   <div id="footer-placeholder"></div>
   ```

2. Include the required CSS and JavaScript:
   ```html
   <link rel="stylesheet" type="text/css" href="components/components.css">
   <script src="components/componentLoader.js"></script>
   ```

### Component Loader
The `componentLoader.js` automatically loads the header and footer components when the page loads. It uses the `fetch` API to load the HTML components and inserts them into the placeholder elements.

## Benefits

- **Maintainability**: Changes to header/footer only need to be made in one place
- **Consistency**: Ensures all pages have identical header and footer
- **Modularity**: Components can be easily reused across different pages
- **Performance**: Components are loaded dynamically as needed

## Files Updated

The following files have been updated to use the new component structure:
- `index.html`
- `About.html`
- `History.html`
- `Products.html`

All pages now use the same header and footer components, making the website more maintainable and consistent. 