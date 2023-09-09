function updateClock() {
    const countrySelect = document.getElementById("country-select");
    const selectedTimeElement = document.getElementById("selected-time");
    const selectedDateElement = document.getElementById("selected-date");

    const selectedValue = countrySelect.value;
    let time;

    switch (selectedValue) {
        case "dhaka":
            time = new Date().toLocaleTimeString("UTC+6", { timeZone: "Asia/Dhaka" });
            break;
        case "new-york":
            time = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" });
            break;
        case "london":
            time = new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" });
            break;
        case "tokyo":
            time = new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" });
            break;

        default:
            time = new Date().toLocaleTimeString();
    }

    const currentDate = new Date().toLocaleDateString();
    selectedTimeElement.textContent = `Time in ${countrySelect.options[countrySelect.selectedIndex].text}: ${time}`;
    selectedDateElement.textContent = `Date: ${currentDate}`;
}

// Update the clock whenever the dropdown selection changes
const countrySelect = document.getElementById("country-select");
countrySelect.addEventListener("change", updateClock);

// Initial call to set the clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);