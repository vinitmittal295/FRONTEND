// Create the weatherData object
const weatherData = {
    country: ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina'],
    temperature: [25, 20, 30, 28, 22],
    humidity: [60, 70, 65, 80, 75],
    windSpeed: [10, 12, 15, 20, 18],
    conditions: ['Sunny', 'Cloudy', 'Rainy', 'Windy', 'Stormy']
  };
  
  // Function to handle the destructured object and print all information
  function handleWeatherData({ country, temperature, humidity, windSpeed, conditions }) {
    console.log('Weather Data:');
    console.log('Countries:', country);
    console.log('Temperatures:', temperature);
    console.log('Humidity Levels:', humidity);
    console.log('Wind Speeds:', windSpeed);
    console.log('Conditions:', conditions);
  
    // Call another function to handle the array
    processArray(country);
  
    // Call another function to process the entire object
    processWeatherObject(weatherData);
  }
  
  // Function to process the array
  function processArray(arr) {
    console.log('Processing Array:', arr);
    // Pass the array to another function if needed
  }
  
  // Function to process the entire weatherData object and print all keys
  function processWeatherObject(obj) {
    const keys = Object.keys(obj);
    console.log('Weather Data Object Keys:', keys);
    // Pass the keys to another function if needed
  }
  
  // Call the handleWeatherData function with the destructured weatherData object
  handleWeatherData(weatherData);
  