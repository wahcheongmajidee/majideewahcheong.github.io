// Component Loader for Header and Footer
class ComponentLoader {
    constructor() {
        this.components = {
            header: `
                <!-- Header Component -->
                <div class="for">
                    <h1 class="logo"><img src="logo.png" width="60px" height="60px"/></h1>
                    <h1 class="title">Kedai Basikal Wah Cheong</h1>
                    <a href="https://web.facebook.com/wahcheong66"><img class="fb" src="fb.png" width="65px" height="60px"></a>
                </div>
                <div class="dnav">
                    <ul>
                        <li class="nav"><a class="color" href="index.html"><b>HOME</b> </a></li> 
                        <li class="nav"><a class="color" href="About.html"><b>ABOUT US</b></a></li>
                        <li class="nav"><a class="color" href="History.html"><b>HISTORY</b></a></li> 
                        <li class="nav"><a class="color" href="Products.html"><b>PRODUCTS</b></a></li>
                    </ul> 
                </div>
            `,
            footer: `
                <!-- Footer Component -->
                <footer class="page-footer">
                    <div class="container">
                        <div class="information">
                            <strong><h6 class="Information">Additional Information</h6></strong>
                            <div class="aa">
                            <br>Wah Cheong Bicycle Shop is committed to providing customers with the best products and services.Mountain bikes, water bikes, road bikes and various accessories can be found in Wah Cheong.
                            </div>
                        </div>
                        <div class="contact">
                            <strong><h6 class="Contact">Contact Us</h6></strong>
                            <div class="bb">
                            <img class="map"src="map.jpg" width="18px" height="22px">
                            395,<br><div class="address">JALAN TEBRAU,<br>TAMAN MAJIDEE,<br>80250 JOHOR BAHRU,<br>JOHOR.</div>
                            <p><img class="phone"src="phone.JPG" width="22px" height="22px">+ 07 332 1594</p>
                            <p><a class="icon" href="https://web.facebook.com/wahcheong66"><img class="fbicon"src="fbicon.JPG" width="27px"height="25px">Facebook Page</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">Copyright © ruay2023</div>
                </footer>
            `
        };
    }

    // Load a component by name
    loadComponent(name, selector) {
        console.log(`Attempting to load ${name} component into ${selector}`);
        const targetElement = document.querySelector(selector);
        if (targetElement) {
            console.log(`Found target element for ${name}:`, targetElement);
            if (this.components[name]) {
                targetElement.innerHTML = this.components[name];
                console.log(`Successfully loaded ${name} component`);
                return true;
            } else {
                console.error(`Component ${name} not found in components object`);
                return false;
            }
        } else {
            console.error(`Target element ${selector} not found`);
            return false;
        }
    }

    // Load header component
    loadHeader() {
        return this.loadComponent('header', '#header-placeholder');
    }

    // Load footer component
    loadFooter() {
        return this.loadComponent('footer', '#footer-placeholder');
    }

    // Load all components
    loadAllComponents() {
        console.log('Starting to load all components...');
        const headerLoaded = this.loadHeader();
        const footerLoaded = this.loadFooter();
        
        if (!headerLoaded) {
            console.warn('Header component could not be loaded');
        }
        if (!footerLoaded) {
            console.warn('Footer component could not be loaded');
        }
        
        const success = headerLoaded && footerLoaded;
        console.log(`Component loading completed. Success: ${success}`);
        return success;
    }
}

// Initialize component loader when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing component loader...');
    const loader = new ComponentLoader();
    const success = loader.loadAllComponents();
    
    if (success) {
        console.log('All components loaded successfully');
    } else {
        console.error('Some components failed to load');
    }
});

// Fallback: If DOMContentLoaded already fired, try loading immediately
if (document.readyState === 'loading') {
    console.log('Document still loading, waiting for DOMContentLoaded...');
} else {
    console.log('Document already loaded, loading components immediately...');
    const loader = new ComponentLoader();
    const success = loader.loadAllComponents();
    
    if (success) {
        console.log('All components loaded successfully (immediate load)');
    } else {
        console.error('Some components failed to load (immediate load)');
    }
} 