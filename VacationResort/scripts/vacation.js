function preventDefault() {
    checkbox.addEventListener("click", getRoomRate, false);
}

function getRoomRate(event) {
    event.preventDefault();

    let checkInDate = new Date(document.getElementById("checkin-date").value);
    let numberOfNights = parseInt(document.getElementById("number-of-nights").value);
    let selectedOption = document.querySelector("input[name='bedType']:checked").value;


    const month = checkInDate.getMonth();


    document.getElementById("roomCost").innerText = roomPrice;


}