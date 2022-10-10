function preventDefault() {
    checkbox.addEventListener("click", getRoomRate, false);
}

function getRoomRate(event) {
    event.preventDefault();

    let checkInDate = new Date(document.getElementById("checkin-date").value);
    let numberOfNights = parseInt(document.getElementById("number-of-nights").value);
    let roomSelected = document.querySelector("input[name='bedType']:checked").value;
    let pickedDiscount = document.querySelector("input[name='discounts']:checked").value;


    const month = checkInDate.getMonth();
    let inSeason = false;
    let cost = 0;
    let discount = 0;

    switch (month) {
        case 5:
        case 6:
        case 7:
            inSeason = true
            break;
        default:
            inSeason = false
            break;
    }

    console.log(month);

    if (inSeason) {
        if (roomSelected == "king" || roomSelected == "queen") {
            cost = 250 * numberOfNights;
        } else {
            cost = 350 * numberOfNights;
        }
    } else {
        if (roomSelected == "king" || roomSelected == "queen") {
            cost = 150 * numberOfNights;
        } else {
            cost = 210 * numberOfNights;
        }
    }


    if (pickedDiscount == "senior") {
        discount += .10 * cost;
    }
    if (pickedDiscount == "military") {
        discount += .20 * cost;
    }

    let discountedRoomPrice = Math.abs(discount - cost);
    let tax = discount * .12;
    let finalCost = discountedRoomPrice + tax;

    document.getElementById("roomCost").innerText = `Your room's price $${cost}`;
    document.getElementById("discount").innerText = `Applied Discount $${discount}`;
    document.getElementById("discountedRoom").innerText = `Discounted Room price $${discountedRoomPrice.toFixed(2)}`;
    document.getElementById("tax").innerText = `Tax: $${tax.toFixed(2)}`;
    document.getElementById("total").innerText = `Total Amount: $${finalCost.toFixed(2)}`;

}
