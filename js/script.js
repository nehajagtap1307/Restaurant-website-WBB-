// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show loading state
    document.body.classList.add('loaded');
    
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initMenuFilter();
    initFormHandling();
    initScrollAnimations();
    initGalleryLightbox();
    initReservationForm();
    initContactForm();
});

// Prevent FOUC (Flash of Unstyled Content)
document.addEventListener('DOMContentLoaded', function() {
    // Hide body until everything is loaded
    document.body.style.visibility = 'hidden';
    
    // Show body after a short delay to ensure styles are loaded
    setTimeout(() => {
        document.body.style.visibility = 'visible';
    }, 100);
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Menu Filtering System
function initMenuFilter() {
    const menuData = [
        {
            name: "Paneer Tikka",
            description: "Marinated cottage cheese cubes grilled to perfection with spices and herbs.",
            price: "₹280",
            category: "starters",
            image: "images/Paneer Tikka.jpg"
        },
        {
            name: "Veg Spring Rolls",
            description: "Crispy rolls stuffed with mixed vegetables, served with sweet chili sauce.",
            price: "₹200",
            category: "starters",
            image: "images/Veg Spring Rolls.jpg"
        },
        {
            name: "Stuffed Mushrooms",
            description: "Button mushrooms filled with cheese, herbs, and garlic, baked until golden.",
            price: "₹360",
            category: "starters",
            image: "images/Stuffed Mushrooms.jpg"
        },
        {
            name: "Paneer Butter Masala",
            description: "Cottage cheese cubes simmered in a rich tomato and cashew gravy.",
            price: "₹290",
            category: "main",
            image: "images/Paneer Butter Masala.jpg"
        },
        {
            name: "Veg Biryani",
            description: "Fragrant basmati rice cooked with fresh vegetables, saffron, and aromatic spices.",
            price: "₹420",
            category: "main",
            image: "images/Veg Biryani.jpg"
        },
        {
            name: "Palak Paneer",
            description: "Cottage cheese cubes in a smooth spinach gravy with garlic and spices.",
            price: "₹310",
            category: "main",
            image: "images/Palak Paneer.jpg"
        },
        {
            name: "Chocolate Soufflé",
            description: "Warm chocolate soufflé with vanilla bean ice cream",
            price: "₹290",
            category: "desserts",
            image: "images/Chocolate Soufflé.jpg"
        },
        {
            name: "Crème Brûlée",
            description: "Classic vanilla custard with caramelized sugar crust",
            price: "₹280",
            category: "desserts",
            image: "images/Crème Brûlée.jpg"
        },
        {
            name: "Tiramisu",
            description: "Italian coffee-flavored dessert with mascarpone cream",
            price: "₹250",
            category: "desserts",
            image: "images/Tiramisu.jpg"
        },
        {
            name: "Signature Cocktails",
            description: "House-crafted cocktails using premium spirits and fresh ingredients",
            price: "₹160",
            category: "drinks",
            image: "images/Signature Cocktails.jpg"
        },
        {
            name: "Wine Selection",
            description: "Curated wine list featuring local and international selections",
            price: "$12-25",
            category: "drinks",
            image: "images/Wine Selection.jpg"
        },
        {
            name: "Artisan Coffee",
            description: "Freshly brewed coffee and espresso drinks",
            price: "₹120",
            category: "drinks",
            image: "images/Artisan Coffee.jpg"
        }
    ];

    const menuGrid = document.querySelector('.menu-grid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // Populate menu initially
    displayMenuItems(menuData, 'all');

    // Add event listeners to category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            displayMenuItems(menuData, category);
        });
    });
}

// Display Menu Items
function displayMenuItems(menuData, category) {
    const menuGrid = document.querySelector('.menu-grid');
    const filteredItems = category === 'all' ? menuData : menuData.filter(item => item.category === category);
    
    // Clear grid and show loading state
    menuGrid.innerHTML = '';
    
    // Create loading placeholders first
    const loadingItems = Array.from({length: 6}, () => {
        const loadingItem = document.createElement('div');
        loadingItem.className = 'menu-item loading';
        loadingItem.innerHTML = `
            <div style="height: 200px; background: #f0f0f0;"></div>
            <div class="menu-item-content">
                <div style="height: 20px; background: #f0f0f0; margin-bottom: 10px;"></div>
                <div style="height: 16px; background: #f0f0f0; margin-bottom: 10px;"></div>
                <div style="height: 16px; background: #f0f0f0; margin-bottom: 10px;"></div>
                <div style="height: 24px; background: #f0f0f0; width: 60px;"></div>
            </div>
        `;
        return loadingItem;
    });
    
    loadingItems.forEach(item => menuGrid.appendChild(item));
    
    // Replace loading items with actual content after a short delay
    setTimeout(() => {
        menuGrid.innerHTML = '';
        
        filteredItems.forEach((item, index) => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item fade-in';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.classList.add('error'); this.nextElementSibling.style.display='flex';">
                <div class="image-fallback" style="display: none;">
                    <i class="fas fa-utensils" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                    <p>${item.name}</p>
                </div>
                <div class="menu-item-content">
                    <div>
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                    <div class="price">${item.price}</div>
                </div>
            `;
            menuGrid.appendChild(menuItem);
            
            // Stagger the fade-in animation
            setTimeout(() => {
                menuItem.classList.add('visible');
            }, index * 100);
        });
    }, 500);
}

// Form Handling
function initFormHandling() {
    // Set minimum date for reservations (today)
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
}

// Reservation Form
function initReservationForm() {
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        // Add input validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const dateInput = document.getElementById('date');
        const timeInput = document.getElementById('time');
        const guestsInput = document.getElementById('guests');
        
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Phone validation regex (simple version)
        const phoneRegex = /^[\d\s\+\-\(\)]{10,15}$/;
        
        // Add validation feedback
        function showValidationError(input, message) {
            // Remove any existing error message
            const existingError = input.parentElement.querySelector('.validation-error');
            if (existingError) {
                existingError.remove();
            }
            
            // Create and add error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'validation-error';
            errorDiv.textContent = message;
            errorDiv.style.color = '#e74c3c';
            errorDiv.style.fontSize = '0.8rem';
            errorDiv.style.marginTop = '5px';
            input.parentElement.appendChild(errorDiv);
            
            // Highlight input
            input.style.borderColor = '#e74c3c';
        }
        
        function clearValidationError(input) {
            const existingError = input.parentElement.querySelector('.validation-error');
            if (existingError) {
                existingError.remove();
            }
            input.style.borderColor = '';
        }
        
        // Add input event listeners for real-time validation
        emailInput.addEventListener('input', function() {
            if (this.value && !emailRegex.test(this.value)) {
                showValidationError(this, 'Please enter a valid email address');
            } else {
                clearValidationError(this);
            }
        });
        
        phoneInput.addEventListener('input', function() {
            if (this.value && !phoneRegex.test(this.value)) {
                showValidationError(this, 'Please enter a valid phone number');
            } else {
                clearValidationError(this);
            }
        });
        
        // Form submission handler
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear all previous validation errors
            document.querySelectorAll('.validation-error').forEach(el => el.remove());
            
            // Validate all fields
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                showValidationError(nameInput, 'Name is required');
                isValid = false;
            }
            
            if (!emailInput.value.trim()) {
                showValidationError(emailInput, 'Email is required');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                showValidationError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }
            
            if (!phoneInput.value.trim()) {
                showValidationError(phoneInput, 'Phone number is required');
                isValid = false;
            } else if (!phoneRegex.test(phoneInput.value)) {
                showValidationError(phoneInput, 'Please enter a valid phone number');
                isValid = false;
            }
            
            if (!dateInput.value) {
                showValidationError(dateInput, 'Date is required');
                isValid = false;
            }
            
            if (!timeInput.value) {
                showValidationError(timeInput, 'Time is required');
                isValid = false;
            }
            
            if (!guestsInput.value) {
                showValidationError(guestsInput, 'Number of guests is required');
                isValid = false;
            }
            
            if (!isValid) {
                showNotification('Please fill in all required fields correctly.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Processing...';
            submitBtn.disabled = true;

            // Get form data
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                date: dateInput.value,
                time: timeInput.value,
                guests: guestsInput.value,
                specialRequests: document.getElementById('special-requests').value.trim()
            };

            // Submit to backend API
            fetch('http://localhost:5000/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show success message
                    showNotification('Reservation submitted successfully! We will confirm via email.', 'success');
                    // Reset form
                    reservationForm.reset();
                } else {
                    // Show error message
                    showNotification('Error: ' + data.message, 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showNotification('Error submitting reservation. Please try again.', 'error');
            })
            .finally(() => {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! We will get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Gallery Lightbox
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
}

// Open Lightbox
function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close lightbox functionality
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
            document.body.removeChild(lightbox);
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (document.querySelector('.lightbox')) {
                document.body.removeChild(lightbox);
            }
        }
    });
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Determine background color based on notification type
    let bgColor = '#3498db'; // Default info color
    if (type === 'success') bgColor = '#27ae60';
    if (type === 'error') bgColor = '#e74c3c';
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${bgColor};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add lightbox styles dynamically
const lightboxStyles = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-content img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }
    
    .close-lightbox {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .close-lightbox:hover {
        background: rgba(0, 0, 0, 0.8);
    }
`;

// Inject lightbox styles
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);

// Add fade-in class to elements that should animate
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.menu-item, .gallery-item, .review-card, .event-card');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
    });
});

// Initialize scroll animations after a short delay
setTimeout(() => {
    initScrollAnimations();
}, 500);
