const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get('roomId');
const title = urlParams.get('title');
const cost = urlParams.get('cost');
const currency = urlParams.get('currency');

const paymentInfoDiv = document.getElementById('payment-info');
const paymentForm = document.getElementById('payment-form');
const roomIdInput = document.getElementById('room-id');
const amountInput = document.getElementById('amount');
const currencyInput = document.getElementById('currency');

const roomTitle = document.createElement('h3');
roomTitle.textContent = `Room: ${title}`;

const roomCost = document.createElement('p');
roomCost.textContent = `Cost: ${cost} ${currency}`;

paymentInfoDiv.appendChild(roomTitle);
paymentInfoDiv.appendChild(roomCost);

roomIdInput.value = roomId;
amountInput.value = cost;
currencyInput.value = currency;

paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const bookingData = {
        roomId: roomIdInput.value,
        amount: amountInput.value,
        currency: currencyInput.value
    };
/*
    fetch('http://localhost:3000/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Payment successful! Booking confirmed.');
        } else {
            alert('Payment failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });*/
    fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)    
    })
});
