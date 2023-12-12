function showPopup() {
    document.getElementById('popupModal').style.display = 'block';
}

document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('popupModal').style.display = 'none';
    setTimeout(showPopup, 30000);
});

window.onload = function() {
    setTimeout(showPopup, 30000);
};
