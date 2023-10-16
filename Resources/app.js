// Load and insert the header
function getHeader() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
    });
}



// Load and insert the footer
function getFooter() {
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footer').innerHTML = data;
    });
}