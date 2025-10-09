home = document.getElementById("home")
guest = document.getElementById("guest")
home.textContent = 0;
guest.textContent = 0;

function addHome(points) {
    home.textContent += points
}

function addGuest(points) {
    guest.textContent += points
}