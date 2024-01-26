const cities = [];
let cityName = '';

while (cityName !== 'q'){
    cityName = prompt('Enter a city names as many as you want and then type "q" exit if you want to exit ');
    if(cityName !== 'q'){
        cities.push(cityName);
    }
}

for (const city of cities){
    if (city.length > 5){
        console.log(`This one is a long city name: "${city}" `);
    }
    else if (city.length <= 5) {
    console.log(`This one is a short city name:  "${city}" `);
    }
    else {
    console.log(`This one is a not a city name: "${city}" `);
  }
}