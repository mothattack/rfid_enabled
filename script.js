// JavaScript to show the modal after 30 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popupModal').style.display = 'block';
    }, 30000); // 30000 milliseconds = 30 seconds
};

document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('popupModal').style.display = 'none';
});
