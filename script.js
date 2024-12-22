const destinations = [
    { name: "Paris", image: "./images/paris.jpg" },
    { name: "New York", image: "./images/new-york.jpg" },
    { name: "Tokyo", image: "./images/tokyo.jpg" },
    { name: "Rome", image: "./images/rome.jpg" },
    { name: "Sydney", image: "./images/sydney.jpg" }
];



function suggestDestination() {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    alert(`We suggest you visit: ${destinations[randomIndex].name}`);
}

window.onload = function () {
    const container = document.getElementById("destinations-container");
    destinations.forEach(destination => {
        const card = document.createElement("div");
        card.className = "destination-card";
        card.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}">
      <h3>${destination.name}</h3>
    `;
        container.appendChild(card);
    });
};
