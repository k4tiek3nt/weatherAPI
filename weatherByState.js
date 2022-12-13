let headers = new Headers({
    "Accept"      :"application/json, application/geo+json",
    "Content-Type":"application/json",
    "User-Agent"  :"nowebsite.com, katie@nowebsite.com",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET",
    "Access-Control-Allow-Credentials":"true"
});

const states = [{state: 'AL', coordinates: '32.377716%2C-86.300568'},
  {state: 'AK', coordinates: '58.301598%2C-134.420212'},
  {state: 'AZ', coordinates: '33.729759%2C-111.431221'},
  {state: 'AR', coordinates: '33.448143%2C-112.096962'},
  {state: 'CA', coordinates: '38.576668%2C-121.493629'},
  {state: 'CO', coordinates: '39.739227%2C-104.984856'},
  {state: 'CT', coordinates: '41.764046%2C-72.682198'},
  {state: 'DE', coordinates: '39.157307%2C-75.519722'},
  {state: 'DC', coordinates: '38.897438%2C-77.026817'},
  {state: 'FL', coordinates: '30.438118%2C-84.281296'},
  {state: 'GA', coordinates: '33.749027%2C-84.388229'},
  {state: 'HI', coordinates: '21.307442%2C-157.857376'},
  {state: 'ID', coordinates: '43.617775%2C-116.199722'},
  {state: 'IL', coordinates: '39.798363%2C-89.654961'},
  {state: 'IN', coordinates: '39.768623%2C-86.162643'},
  {state: 'IA', coordinates: '41.591087%2C-93.603729'},
  {state: 'KS', coordinates: '39.048191%2C-95.677956'},
  {state: 'KY', coordinates: '38.186722%2C-84.875374'},
  {state: 'LA', coordinates: '30.457069%2C-91.187393'},
  {state: 'ME', coordinates: '44.307167%2C-69.781693'},
  {state: 'MD', coordinates: '38.978764%2C-76.490936'},
  {state: 'MA', coordinates: '42.358162%2C-71.063698'},
  {state: 'MI', coordinates: '42.733635%2C-84.555328'},
  {state: 'MN', coordinates: '44.955097%2C-93.102211'},
  {state: 'MS', coordinates: '32.303848%2C-90.182106'},
  {state: 'MO', coordinates: '38.579201%2C-92.172935'},
  {state: 'MT', coordinates: '46.585709%2C-112.018417'},
  {state: 'NE', coordinates: '40.808075%2C-96.699654'},
  {state: 'NV', coordinates: '39.163914%2C-119.766121'},
  {state: 'NH', coordinates: '43.206898%2C-71.537994'},
  {state: 'NJ', coordinates: '40.220596%2C-74.769913'},
  {state: 'NM', coordinates: '35.68224%2C-105.939728'},
  {state: 'NY', coordinates: '42.652843%2C-73.757874'},
  {state: 'NC', coordinates: '35.78043%2C-78.639099'},
  {state: 'ND', coordinates: '46.82085%2C-100.783318'},
  {state: 'OH', coordinates: '39.961346%2C-82.999069'},
  {state: 'OK', coordinates: '35.492207%2C-97.503342'},
  {state: 'OR', coordinates: '44.938461%2C-123.030403'},
  {state: 'PA', coordinates: '40.264378%2C-76.883598'},
  {state: 'RI', coordinates: '41.830914%2C-71.414963'},
  {state: 'SC', coordinates: '34.000343%2C-81.033211'},
  {state: 'SD', coordinates: '44.367031%2C-100.346405'},
  {state: 'TN', coordinates: '36.16581%2C-86.784241'},
  {state: 'TX', coordinates: '30.27467%2C-97.740349'},
  {state: 'UT', coordinates: '40.777477%2C-111.888237'},
  {state: 'VT', coordinates: '44.262436%2C-72.580536'},
  {state: 'VA', coordinates: '37.538857%2C-77.43364'},
  {state: 'WA', coordinates: '47.035805%2C-122.905014'},
  {state: 'WV', coordinates: '38.336246%2C-81.612328'},
  {state: 'WI', coordinates: '43.074684%2C-89.384445'},
  {state: 'WY', coordinates: '41.140259%2C-104.820236'}
];

let userInput = prompt("Enter state abbreviation to get forecast (i.e. CO)");

let coordinate;

for (let i = 0; i < states.length;){
    if (states[i].state == userInput) {
        coordinate = states[i].coordinates;        
        break;
    } else {
        i++
    }
}

let url = "https://api.weather.gov/points/" + coordinate

const forecastUrl = fetch(url, headers)
    .then((response) => response.json())
    .then((data) => {
        return data.properties;
});

const printCurrentForecast = () => {
    forecastUrl.then((weather) => {
    let current = weather.forecast;
    fetch(current, headers).then((response) => {
        if (response.ok) {
            return response.json();
            } else {
            throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(`${data.properties.periods[0].name} it is ${data.properties.periods[0].temperature} Degrees Farenheit in ${userInput}.`);
            console.log(data.properties.periods[0].detailedForecast);            
        })
        .catch((error) => console.error("FETCH ERROR:", error));
    });

};

const printHourlyForecast = () => {
    forecastUrl.then((hourlyWeather) => {
    let hourly = hourlyWeather.forecastHourly;
    fetch(hourly, headers).then((response) => {
        if (response.ok) {
            return response.json();
            } else {
            throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            const twelveHours = [];
            for (let i = 0; i < data.properties.periods.length && i < 12; i++) {
                twelveHours.push(data.properties.periods[i]);
            }
            console.log("Hourly forecast for " + userInput + ":");
            for (let j = 0; j < twelveHours.length;) {
            console.log(`Hour ${twelveHours[j].number}: ${twelveHours[j].temperature} Degrees Farenheit. ${twelveHours[j].shortForecast}`);
            j++
            }      
        })
        .catch((error) => console.error("FETCH ERROR:", error));
    });
};

const printWeeklyForecast = () => {
    forecastUrl.then((weeklyWeather) => {
    let weekly = weeklyWeather.forecast;
    fetch(weekly, headers).then((response) => {
        if (response.ok) {
            return response.json();
            } else {
            throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log("Weekly forecast for " + userInput + ":");
            for (let i = 0; i < data.properties.periods.length;) {
                console.log(`${data.properties.periods[i].name}'s forecast: ${data.properties.periods[i].temperature} Degrees Farenheit.`);
                console.log(data.properties.periods[i].detailedForecast);
                i++
            }
        })
        .catch((error) => console.error("FETCH ERROR:", error));
    });

};

let forecastType = prompt(`Which forecast would you like? Current, hourly, weekly, or all three? 
(Please type: current, hourly, weekly, or all)`);
switch(forecastType){
    case forecastType = "current":
        printCurrentForecast();
    break;
    case forecastType = "hourly":        
        printHourlyForecast();
    break;
    case forecastType = "weekly":        
        printWeeklyForecast();
    break;
    case forecastType = "all":
        printCurrentForecast();
        printHourlyForecast();
        printWeeklyForecast();
    break;
    default:
        alert("Must type current, hourly, weekly, or all");
    break;
}