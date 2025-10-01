// Load built-in fs module
const fs = require('fs');

try {
  // Read JSON file
  const data = fs.readFileSync('itinerary.json', 'utf-8');
  const itinerary = JSON.parse(data);

  // Log the full itinerary
  console.log("Travel Itinerary:");
  console.log(JSON.stringify(itinerary, null, 2)); // Pretty print
} catch (error) {
  console.error("Error reading or parsing JSON file:", error.message);
}
