// Utility function to update the card count
function updateCardCount() {
    const cardActive = document.querySelectorAll(".view-card");
    const totalCard = cardActive.length;

    const number = document.querySelector(".number");
    if (number) {
        number.innerHTML = totalCard;
    }
}

// Function to mark all cards
function markAll() {
    // Remove 'view-card' class from cards
    const cards = document.querySelectorAll(".card.view-card");
    cards.forEach((card) => card.classList.remove("view-card"));

    // Remove 'icon-circle' class from icons
    const iconCircles = document.querySelectorAll(".icon-circle");
    iconCircles.forEach((icon) => icon.classList.remove("icon-circle"));

    // Update the card count
    updateCardCount();
}

// Initial update of the card count when the script loads
updateCardCount();
