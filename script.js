// CLOSING THE RULES POPUP
const closeRules = document.getElementById('closeRules'); // targets close btn 

const showPopup = document.getElementById('showPopup'); // targets pop-up


closeRules.onclick = function () { closingRules() };

function closingRules() {
    showPopup.style.display = 'none';
};

function readRules() {
    showPopup.style.display = 'block';
}