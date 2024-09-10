let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('nav-hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('nav-hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

// Event listener for dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor behavior
            const sortBy = this.textContent.trim(); // Get the text of the clicked link
            sortShoes(sortBy); // Call function to sort shoes
        });
    });
});

// Function to sort shoes
function sortShoes(criteria) {
    const saleShoes = document.querySelectorAll('#sale .shoe-item');
    const saleShoeArray = Array.from(saleShoes);

    if (criteria === 'Price: Low to High') {
        saleShoeArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
            return priceA - priceB;
        });
    } else if (criteria === 'Price: High to Low') {
        saleShoeArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
            return priceB - priceA;
        });
    } else if (criteria === 'Newest') {
        // Assuming newest means the default order, or you can implement your logic here
        console.log('Sort by newest clicked');
    }

    // Re-arrange the sorted items in the DOM
    const shoeGallery = document.querySelector('#sale .shoe-gallery');
    saleShoeArray.forEach(shoe => {
        shoeGallery.appendChild(shoe); // This moves the shoe-item to the new sorted position
    });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
}

