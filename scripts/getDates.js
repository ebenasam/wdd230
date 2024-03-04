// Getting current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.getElementById("year").textContent = currentDate.getFullYear();

// Getting the modigication date and time
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`


if (localStorage.getItem('visitCount')) {
    let visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', visitCount);
} else {
    localStorage.setItem('visitCount', 1);
}
const visitCount = localStorage.getItem('visitCount');
document.getElementById("pagevisits").textContent = `Number of Page Visits: ${visitCount}`;