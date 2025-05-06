// Add your JavaScript code here

function changeRSVPCount(change) {
    const rsvpInput = document.getElementById('rsvpCount');
    let currentValue = parseInt(rsvpInput.value, 10);
    const newValue = currentValue + change;

    if (newValue >= parseInt(rsvpInput.min, 10) && newValue <= parseInt(rsvpInput.max, 10)) {
        rsvpInput.value = newValue;
    }
}