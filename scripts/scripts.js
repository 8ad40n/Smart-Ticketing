document.addEventListener("DOMContentLoaded", () => {
    const seatButtons = document.getElementsByClassName("seat");
    let totalSeats = parseInt(document.querySelector(".seatCount").innerText); 
    let count = 0; 

    for (let i = 0; i < seatButtons.length; i++) {
        seatButtons[i].addEventListener("click", toggleSeatSelection);
        seatButtons[i].addEventListener("keyup", toggleSeatSelection);
    }

    function toggleSeatSelection() {
        this.classList.toggle("bg-primary");
        this.classList.toggle("text-white");
        const seatNo = this.innerText;

        if (this.classList.contains("bg-primary")) {
            count++;
        } else {
            count--;
        }
        // selected seat
        document.querySelector(".selected-seat").innerText = count;

        // total price
        document.querySelector(".selected-seat").innerText = count;

        // seat left
        const left = totalSeats - count;
        document.querySelector(".seatCount").innerText = left;

        // seat info
        updateSeatInfo(getSelectedSeats());

        // total price
        const totalPrice= count*550;
        document.querySelector(".total-price").innerText= totalPrice;

        // Grand price
        const grandPrice= count*550;
        document.querySelector(".grand-price").innerText= grandPrice;


        console.log(`Number of selected seats: ${count}`);
        console.log(`Seats left: ${left}`);
    }

    function getSelectedSeats() {
        const selectedSeats = document.querySelectorAll(".seat.bg-primary");
        const selectedSeatNumbers = [];
        selectedSeats.forEach(seat => {
            selectedSeatNumbers.push(seat.innerText);
        });
        return selectedSeatNumbers;
    }

    function updateSeatInfo(selectedSeatNumbers) {
        const seatInfoContainer = document.querySelector(".seat-info");

        seatInfoContainer.innerHTML = "";

        selectedSeatNumbers.forEach(seatNo => {
            const seatType = "Economy"; 
            const seatPrice = 550;

            const seatInfo = document.createElement("div");
            seatInfo.classList.add("inter", "text-sm", "font-light", "flex", "justify-between");
            seatInfo.innerHTML = `
                <p class="seat-no">${seatNo}</p>
                <p>${seatType}</p>
                <p>${seatPrice}</p>
            `;
            seatInfoContainer.appendChild(seatInfo);
        });
    }
    
});

function discount() {
    const coupon = document.querySelector(".coupon").value;
    if (coupon === "NEW20") {
        const totalElement = document.querySelector(".total-price");
        const total = parseInt(totalElement.innerText);
        const discountedTotal = total * 0.80; 
        document.querySelector(".grand-price").innerText = discountedTotal;
    }
    else if(coupon === "NEW15")
    {
        const totalElement = document.querySelector(".total-price");
        const total = parseInt(totalElement.innerText);
        const discountedTotal = total * 0.85; 
        document.querySelector(".grand-price").innerText = discountedTotal;
    }
}

