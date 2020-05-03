// Define variables and access elements from the HTML webpage document
var button = document.getElementById("button");
var covidInfo = document.getElementById("covid-info");
var buttonCount = 0;

// Creating the function that responds to the Click of the button 
button.addEventListener("click", function(){
  // Define access to JQuery using $.ajax() function 
  $.ajax({

    //Specify the URL source for the data to be used 
    url: 'https://coronavirus-tracker-api.herokuapp.com/v2/locations',
    
    //Define the type of request to make
    type: 'GET',

    //Specifies whether or not a cross-domain request is required
    crossDomain: true,

    //Specifies the type of data expected back from the server
    dataType: 'json',

    //Define the function to be called if the request is successful
    success: function(data) {
      // Log the data onto the console (for Inspect Element debugging)
      console.log(data);

      // Calling the renderHTML function defined below
      renderHTML(data);

      // Update the button count
      buttonCount++;

      // Hide the button 
      if (buttonCount = 1){
        button.classList.add("hide-me");
      }
    }
  })
});

// Function definition to display the results from the dataset
function renderHTML(data){

  //Define the string that will be used to store the information
  var htmlString = "";

  //Variable definition for the ACT confirmed cases figure
  var act_confirmed = data.locations[8].latest.confirmed;

  //Variable definition for the ACT confirmed deaths figure
  var act_deaths = data.locations[8].latest.deaths;
  
  //Variable definition for the NSW confirmed cases figure
  var nsw_confirmed = data.locations[9].latest.confirmed;
  
   //Variable definition for the NSW confirmed deaths figure
  var nsw_deaths = data.locations[9].latest.deaths;

  //Variable definition for the NT confirmed cases figure
  var nt_confirmed = data.locations[10].latest.confirmed;

  //Variable definition for the NT confirmed deaths figure
  var nt_deaths = data.locations[10].latest.deaths;

  //Variable definition for the QLD confirmed cases figure
  var qld_confirmed = data.locations[11].latest.confirmed;

  //Variable definition for the QLD confirmed deaths figure
  var qld_deaths = data.locations[11].latest.deaths;

  //Variable definition for the SA confirmed cases figure
  var sa_confirmed = data.locations[12].latest.confirmed;

  //Variable definition for the SA confirmed deaths figure
  var sa_deaths = data.locations[12].latest.deaths;

  //Variable definition for the TAS confirmed cases figure
  var tas_confirmed = data.locations[13].latest.confirmed;

  //Variable definition for the TAS confirmed deaths figure
  var tas_deaths = data.locations[13].latest.deaths;

  //Variable definition for the VIC confirmed cases figure
  var vic_confirmed = data.locations[14].latest.confirmed;

  //Variable definition for the VIC confirmed deaths figure
  var vic_deaths = data.locations[14].latest.deaths;

  //Variable definition for the WA confirmed cases figure
  var wa_confirmed = data.locations[15].latest.confirmed;

  //Variable definition for the WA confirmed deaths figure
  var wa_deaths = data.locations[15].latest.deaths;

  // Variable definition to compute the total number of confirmed cases across all Australian states
  var aus_confirmed_total = act_confirmed + nsw_confirmed + nt_confirmed +
  qld_confirmed + sa_confirmed + tas_confirmed + vic_confirmed + wa_confirmed;

  // Variable definition to compute the total number of deaths across all Australian states
  var aus_deaths_total = act_deaths + nsw_deaths + nt_deaths + qld_deaths + sa_deaths + tas_deaths + vic_deaths + wa_deaths;


  // Update the htmlString to display the number of confirmed cases globally
  htmlString += "<p>" + "The number of confirmed reported cases globally are "+  data.latest.confirmed + "."

  // Update the htmlString to display the number of deaths globally
  htmlString += "<p>" + "The number of deaths that have been reported globally has risen to " + data.latest.deaths + "."

  // Update the htmlString to display the total number of confirmed cases across Australia
  htmlString += "<p>" + "Total number of confirmed cases reported in Australia is " + aus_confirmed_total + ".";

  // Update the htmlString to display the total number of 
  htmlString += "<p>" + "Total number of reproted deaths in Australia is " + aus_deaths_total + ".";

  // Display the information to be reported from the dataset 
  covidInfo.insertAdjacentHTML('beforeend',htmlString);
}