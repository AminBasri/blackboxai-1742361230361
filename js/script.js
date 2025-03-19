// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    initializeCart();
    initializeNotifications();
    initializeAnimations();
    initializeScrollEffects();
    initializeCategoryCards();
});

function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('button');
    
    if (searchInput && searchButton) {
        // Add focus effects
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('shadow-lg');
        });

        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('shadow-lg');
        });

        // Search functionality
        searchButton.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
}

function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        // Add search animation
        const searchButton = document.querySelector('button');
        searchButton.classList.add('animate-pulse');
        setTimeout(() => {
            searchButton.classList.remove('animate-pulse');
            console.log('Searching for:', searchTerm);
        }, 500);
    }
}

function initializeCart() {
    const cartButton = document.querySelector('.fa-shopping-cart').parentElement;
    const cartBadge = document.querySelector('.cart-badge');
    
    if (cartButton && cartBadge) {
        cartButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click animation
            cartButton.classList.add('scale-110');
            setTimeout(() => {
                cartButton.classList.remove('scale-110');
            }, 200);

            // Simulate cart update
            updateCartBadge(Math.floor(Math.random() * 5));
        });
    }
}

function updateCartBadge(count) {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.textContent = count;
        badge.classList.add('animate-bounce');
        setTimeout(() => {
            badge.classList.remove('animate-bounce');
        }, 1000);
    }
}

function initializeNotifications() {
    const notificationButton = document.querySelector('.fa-bell').parentElement;
    
    if (notificationButton) {
        notificationButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click animation
            const icon = notificationButton.querySelector('i');
            icon.classList.add('animate-bounce');
            setTimeout(() => {
                icon.classList.remove('animate-bounce');
            }, 1000);
        });
    }
}

function initializeAnimations() {
    // Add fade-in animation to categories
    const categories = document.querySelectorAll('.category-card');
    categories.forEach((category, index) => {
        category.style.opacity = '0';
        setTimeout(() => {
            category.style.opacity = '1';
            category.classList.add('animate-fadeIn');
        }, index * 100);
    });

    // Add hover animations to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'all 0.3s ease';
        });
    });
}

function initializeScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header hide/show effect
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;

        // Animate elements on scroll
        animateOnScroll();
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.category-card, .banner-hover');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight && elementBottom > 0) {
            element.classList.add('animate-fadeIn');
        }
    });
}

function initializeCategoryCards() {
    const cards = document.querySelectorAll('.category-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            icon.classList.add('animate-bounce');
            setTimeout(() => {
                icon.classList.remove('animate-bounce');
            }, 1000);
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Initialize random cart count on load
window.addEventListener('load', () => {
    updateCartBadge(Math.floor(Math.random() * 5));
});
