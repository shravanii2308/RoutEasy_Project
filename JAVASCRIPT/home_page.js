// let destinations = [];

// function addDestination() {
//   const destinationInput = document.querySelector('.destination-input');
//   const destinationValue = destinationInput.value;

//   if (destinationValue) {
//     destinations.push(destinationValue);
//     destinationInput.value = '';
//     destinationInput.placeholder = `Enter destination ${destinations.length + 1}`;
//   }
// }

// function submitDestinations() {
//   // const locationInput = document.getElementById('locationInput');
//   // const mapDiv = document.getElementById('map');

//   // const location = locationInput.value;
//   const locationInput = document.querySelector('.locationInput');
//   const mapImage = document.getElementById('mapImage');
  
//   const location = locationInput.value;

//   if (location && destinations.length > 0) {
//     const map = new google.maps.Map(mapDiv, {
//       center: { lat: 0, lng: 0 }, // Replace with your initial center coordinates
//       zoom: 12, // Adjust the zoom level
//     });

//     // Use the location and destinations to display markers on the map
//     // Implement your map logic here
//   } else {
//     mapDiv.innerHTML = 'Please provide your location and at least one destination.';
//   }
// }

let destinations = [];

function addDestination() {
  const destinationInput = document.querySelector('.destination-input');
  const destinationValue = destinationInput.value;

  if (destinationValue) {
    destinations.push(destinationValue);
    destinationInput.value = '';
    destinationInput.placeholder = `Enter destination ${destinations.length + 1}`;
  }
}

function submitDestinations() {
  const locationInput = document.querySelector('.locationInput');
  const mapImage = document.getElementById('mapImage');

  const location = locationInput.value;

  if (location && destinations.length > 0) {
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = ''; // Clear previous content

    // Create an <img> element
    const mapImage = document.createElement('img');
    mapImage.src = '/IMAGE/map_after.jpg'; // Replace with the path to your image
    mapImage.alt = 'Map';
    mapImage.style.width = '100%'; // Adjust the width as needed
    mapImage.style.height = '100%'; // Adjust the height as needed

    // Append the <img> element to the mapDiv
    mapDiv.appendChild(mapImage);}
     else {
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = 'Please provide your location and at least one destination.';
  }
}

