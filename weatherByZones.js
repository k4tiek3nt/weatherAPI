let headers = new Headers({
    "Accept"      :"application/json, application/geo+json",
    "Content-Type":"application/json",
    "User-Agent"  :"nowebsite.com, katie@nowebsite.com",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET",
    "Access-Control-Allow-Credentials":"true"
});

const types = ["land", "marine", "forecast", "public", "coastal", "offshore", "fire", "county"];

alert("Forecast choices are land, marine, forecast, public, coastal, offshore, fire, or county.")
var userInput = prompt("Enter the type of forecast you want");

switch(userInput) {
  case userInput = "land":
    	let landUrl = "https://api.weather.gov/zones?type="+types[0];

	const landZones = fetch(landUrl, headers)
    		.then((response) => response.json())
    		.then((data) => {
			return data.features[88].properties.id;
    		});

	const printLandForecast = () => {
    		landZones.then((zoneId) => {
      		let landForecast = "https://api.weather.gov/zones/"+types[0]+"/"+zoneId+"/forecast"
      		fetch(landForecast, headers).then((response) => {
    			if (response.ok) {
      			return response.json();
    			} else {
      			throw new Error("NETWORK RESPONSE ERROR");
    			}
  			})
  			.then(data => {
				console.log(data.properties.periods[0].name);
	  			console.log(data.properties.periods[0].detailedForecast);
  			})
  			.catch((error) => console.error("FETCH ERROR:", error));
   		});
	};

	printLandForecast();
    	break;
  case userInput = "marine":
    	let marineUrl = "https://api.weather.gov/zones?type="+types[1];

	const marineZones = fetch(marineUrl, headers)
    		.then((response) => response.json())
    		.then((data) => {
			return data.features[200].properties.id;
    		});

	const printMarineForecast = () => {
    		marineZones.then((zoneId) => {
      		let marineForecast = "https://api.weather.gov/zones/"+types[1]+"/"+zoneId+"/forecast"
      		fetch(marineForecast, headers).then((response) => {
    			if (response.ok) {
      			return response.json();
    			}else {
      			throw new Error("Forecasts for marine areas not yet supported by this API.");
			}
  			})
  			.then(data => {
				console.log(data.properties.periods[0].name);
	  			console.log(data.properties.periods[0].detailedForecast);
  			})
  			.catch((error) => console.error("FETCH ERROR:", error));
			alert("Forecasts for marine areas not yet supported by this API.");
   		});
	};

	printMarineForecast();
    	break;
  case userInput = "forecast":
    	let forecastUrl = "https://api.weather.gov/zones?type="+types[2];

	const forecastZones = fetch(forecastUrl, headers)
    		.then((response) => response.json())
    		.then((data) => {
			return data.features[2709].properties.id;
    		});
	
	const printForecastForecast = () => {
    		forecastZones.then((zoneId) => {
      		let forecastForecast = "https://api.weather.gov/zones/"+types[2]+"/"+zoneId+"/forecast"
      		fetch(forecastForecast, headers).then((response) => {
    			if (response.ok) {
      			return response.json();
    			}else {
      			throw new Error("NETWORK RESPONSE ERROR");
    			}
  			})
  			.then(data => {
				console.log(data.properties.periods[0].name);
	  			console.log(data.properties.periods[0].detailedForecast);
  			})
  			.catch((error) => console.error("FETCH ERROR:", error));
   		});
	};

	printForecastForecast();
    break;
 case userInput = "public":
    	let publicUrl = "https://api.weather.gov/zones?type="+types[3];

	const publicZones = fetch(publicUrl, headers)
    		.then((response) => response.json())
    		.then((data) => {
			return data.features[336].properties.id;
    		});

	const printPublicForecast = () => {
    		publicZones.then((zoneId) => {
      		let publicForecast = "https://api.weather.gov/zones/"+types[3]+"/"+zoneId+"/forecast"
      		fetch(publicForecast, headers).then((response) => {
    			if (response.ok) {
      			return response.json();
    			} else {
      			throw new Error("NETWORK RESPONSE ERROR");
    			}
  			})
  			.then(data => {
				console.log(data.properties.periods[0].name);
	  			console.log(data.properties.periods[0].detailedForecast);
  			})
  			.catch((error) => console.error("FETCH ERROR:", error));
   		});
	};

	printPublicForecast();
    break;
 case userInput = "coastal":
    	let coastalUrl = "https://api.weather.gov/zones?type="+types[4];

	const coastalZones = fetch(coastalUrl, headers)
    		.then((response) => response.json())
    		.then((data) => {
			return data.features[239].properties.id;
    		});

	const printCoastalForecast = () => {
    		coastalZones.then((zoneId) => {
      		let coastalForecast = "https://api.weather.gov/zones/"+types[4]+"/"+zoneId+"/forecast"
      		fetch(coastalForecast, headers).then((response) => {
    			if (response.ok) {
      			return response.json();
    			}else {
      			throw new Error("Forecasts for marine areas not yet supported by this API.");
			}
  			})
  			.then(data => {
				console.log(data.properties.periods[0].name);
	  			console.log(data.properties.periods[0].detailedForecast);
  			})
  			.catch((error) => console.error("FETCH ERROR:", error));
			alert("Forecasts for marine areas not yet supported by this API.");
   		});
	};

	printCoastalForecast();
    break;
 case userInput = "offshore":
  	let offshoreUrl = "https://api.weather.gov/zones?type="+types[5];

	const offshoreZones = fetch(offshoreUrl, headers)
    		.then((response) => response.json())
    		.then((data) => {
			return data.features[113].properties.id;
    		});

	const printOffshoreForecast = () => {
    		offshoreZones.then((zoneId) => {
      		let offshoreForecast = "https://api.weather.gov/zones/"+types[5]+"/"+zoneId+"/forecast"
      		fetch(offshoreForecast, headers).then((response) => {
    			if (response.ok) {
      			return response.json();
    			}else {
      			throw new Error("Forecasts for marine areas not yet supported by this API.");
			}
  			})
  			.then(data => {
				console.log(data.properties.periods[0].name);
	  			console.log(data.properties.periods[0].detailedForecast);
  			})
  			.catch((error) => console.error("FETCH ERROR:", error));
			alert("Forecasts for marine areas not yet supported by this API.");
   		});
	};

	printOffshoreForecast();
    break;
 case userInput = "fire":
    	let fireUrl = "https://api.weather.gov/zones?type="+types[6];

	const fireZones = fetch(fireUrl, headers)
    		.then((response) => response.json())
    		.then((data) => {
			return data.features[117].properties.id;
    		});

	const printFireForecast = () => {
    		fireZones.then((zoneId) => {
      		let fireForecast = "https://api.weather.gov/zones/"+types[6]+"/"+zoneId+"/forecast"
      		fetch(fireForecast, headers).then((response) => {
    			if (response.ok) {
      			return response.json();
    			} else {
      			throw new Error("NETWORK RESPONSE ERROR");
    			}
  			})
  			.then(data => {
				console.log(data.properties.periods[0].name);
	  			console.log(data.properties.periods[0].detailedForecast);
  			})
  			.catch((error) => console.error("FETCH ERROR:", error));
   		});
	};

	printFireForecast();
    break;
 case userInput = "county":
	let countyUrl = "https://api.weather.gov/zones?type="+types[7];

	const countyZones = fetch(countyUrl, headers)
    		.then((response) => response.json())
    		.then((data) => {
			return data.features[378].properties.id;
    		});

	const printCountyForecast = () => {
    		countyZones.then((zoneId) => {
      		let countyForecast = "https://api.weather.gov/zones/"+types[7]+"/"+zoneId+"/forecast"
      		fetch(countyForecast, headers).then((response) => {
    			if (response.ok) {
      			return response.json();
    			}else {
      			throw new Error("Forecasts for marine areas not yet supported by this API.");
			}
  			})
  			.then(data => {
				console.log(data.properties.periods[0].name);
	  			console.log(data.properties.periods[0].detailedForecast);
  			})
  			.catch((error) => console.error("FETCH ERROR:", error));
			alert("Forecasts for marine areas not yet supported by this API.");
   		});
	};

	printCountyForecast();
    break;
  default:
    console.log("Must enter land, marine, forecast, public, coastal, offshore, fire, or county.");
}