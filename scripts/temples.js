document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // View toggle functionality
    const largeLink = document.getElementById('large-link');
    const smallLink = document.getElementById('small-link');
    const gallery = document.getElementById('gallery');

    function setSmallView() {
        gallery.classList.add('small-view');
        gallery.classList.remove('large-view');
        smallLink.classList.add('active-view');
        largeLink.classList.remove('active-view');
        console.log("Small view activated - single column");
    }

    function setLargeView() {
        gallery.classList.add('large-view');
        gallery.classList.remove('small-view');
        largeLink.classList.add('active-view');
        smallLink.classList.remove('active-view');
        console.log("Large view activated - 3 columns");
    }

    // Set initial view
    setLargeView();

    smallLink.addEventListener('click', function(e) {
        e.preventDefault();
        setSmallView();
    });

    largeLink.addEventListener('click', function(e) {
        e.preventDefault();
        setLargeView();
    });

    // Last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 
        `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;
});