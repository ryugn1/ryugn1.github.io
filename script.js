function confirmTopUp(gameName) {
    alert(`You have chosen to top up ${gameName}!`);
}

// Simulate loading screen with animation
window.onload = function() {
    const loadingScreen = document.querySelector('.loading');
    const mainContent = document.querySelector('.main-content');
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';

    // Fade-in effect for cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible', 'animate__fadeInUp');
        }, index * 100); // Delay each card slightly more
    });
};
