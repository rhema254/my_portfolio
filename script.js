function toggleMenu() {
    const hamburgerButton = document.getElementById('hamburger-icon');
    const menuLinksElement = document.getElementById('menu-links');

    menuLinksElement.classList.toggle('hidden');
    hamburgerButton.classList.toggle('open')
    
}

