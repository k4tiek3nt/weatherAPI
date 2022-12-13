# weatherAPI
Weather API for United States

In this exercise, you will write a simple application that retrieves weather forecast information for a particular zone or weather station and presents it in a nicely formatted way. Here are the key requirements:
Use data from the National Weather Service API: https://www.weather.gov/documentation/services-web-api#/default/office
Allow the user to input a State (e.g., CO) and retrieve a list of local entities - e.g., zones, weather stations - from which forecast data can be accessed.
Present a detailed forecast based on a specific local entity or set of coordinates. You can decide what API service to use to pull forecast information, as well as how to present your data; there are several options available in the API. However, you should present the data in a way that makes it easy to see hourly or daily forecasts with temperature highs/lows.
Feel free to use the programming language of your choice - C#, Python, etc.
Once you are done, send me your source code and the amount of time you spent on the exercise.
 
In case it is helpful:
Feel free to just focus on getting the list of Zones using this API endpoint. 
https://www.weather.gov/documentation/services-web-api#/default/zone_list

Once you have a Zone ID, call the "zones/land/{zoneId}/forecast" endpoint to pull forecast data and grab the "detailedForecast" field from the response.
https://www.weather.gov/documentation/services-web-api#/default/zone_forecast
 
You'll need to throw a "User-Agent" header in your request to the API endpoints.

Note: Now that this is complete there are improvements that could be made. 
A while loop could be added to allow the user to get another forecast until decides is done getting forecasts.
User input for zip code could be added to find state based on zip code. 

These two improvements would not add so much to the API that would really make that much of a difference in taking a look at a simple api.
They are suggestions for additonal ways to make the API more user friendly.
