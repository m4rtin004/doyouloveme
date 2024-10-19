document.querySelector('.yes-btn').addEventListener('click', function() {
    alert('Yay! I love you too!');
});

const noButton = document.querySelector('.no-btn');

function moveNoButton() {
    // Get the dimensions of the button and window
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Generate random positions
    const randomX = Math.random() * (windowWidth - buttonWidth);
    const randomY = Math.random() * (windowHeight - buttonHeight - 100); // 100px padding from top

    // Move the button to the random position
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Move the button every second
setInterval(moveNoButton, 1000);

noButton.addEventListener('click', function() {
    alert('That’s okay! Everyone has their preferences.');
});
