// CLOSING THE RULES POPUP
const closeRules = document.getElementById('closeRules'); // targets close btn

const startGame = document.getElementById('startGame'); // targets button Start

const overlay = document.getElementById('popupOverlay'); // targets overlay background

const showPopup = document.getElementById('showPopup'); // targets pop-up

closeRules.onclick = function () { closingRules() };
startGame.onclick = function () { closingRules() };

function closingRules() {
    showPopup.style.display = 'none';
    overlay.style.display = 'none';
};

function readRules() {
    showPopup.style.display = 'block';
    overlay.style.display = 'block';
}

// SHOW POPUP ONLY ONCE
let popupShowed = sessionStorage.getItem('popup');

if (popupShowed != 'seen once') {
    overlay.style.display = 'block';
    showPopup.style.display = 'block';
    sessionStorage.setItem('popup', 'seen once');
} else {
    showPopup.style.display = 'none';
    overlay.style.display = 'none';
}