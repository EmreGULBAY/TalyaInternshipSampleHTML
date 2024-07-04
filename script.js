const rooms = [
    {
        roomId: 1,
        image: '/assets/room.jpg',
        title: 'Standard Room',
        description: 'A cozy room with all the basic amenities to ensure a comfortable stay.',
        cost: 100,
        currency: 'USD'
    },
    {
        roomId: 2,
        image: '/assets/room.jpg',
        title: 'Deluxe Room',
        description: 'A spacious room with additional features for a more luxurious experience.',
        cost: 150,
        currency: 'USD'
    },
    {
        roomId: 3,
        image: '/assets/room.jpg',
        title: 'Suite',
        description: 'Our most premium offering, featuring separate living and sleeping areas.',
        cost: 250,
        currency: 'USD'
    }
    
];

const roomContainer = document.getElementById('room-container');

rooms.forEach(room => {
    const roomDiv = document.createElement('div');
    roomDiv.classList.add('room');

    const roomImg = document.createElement('img');
    roomImg.src = room.image;
    roomImg.alt = room.title;

    const roomTitle = document.createElement('h3');
    roomTitle.textContent = room.title;

    const roomDescription = document.createElement('p');
    roomDescription.textContent = room.description;

    const roomCost = document.createElement('p');
    roomCost.textContent = `Cost: ${room.cost} ${room.currency}`;

    const bookButton = document.createElement('button');
    bookButton.textContent = 'Book Now';
    bookButton.onclick = () => {
        window.location.href = `payment.html?roomId=${room.roomId}&title=${encodeURIComponent(room.title)}&cost=${room.cost}&currency=${room.currency}`;
    };

    roomDiv.appendChild(roomImg);
    roomDiv.appendChild(roomTitle);
    roomDiv.appendChild(roomDescription);
    roomDiv.appendChild(roomCost);
    roomDiv.appendChild(bookButton);

    roomContainer.appendChild(roomDiv);
});
