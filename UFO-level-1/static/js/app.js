/**
 * Colby Alexander Hoke
 * UNC Data Analytics Bootcamp
 * September 2020
 * 
 * UFO-level-1
 */

var ufoData = data; // Bring in the data from data.js

// Select html attributes
var button = d3.select("#filter-btn"); // Select the search button
var form = d3.select("#form"); // Select the form
var tbody = d3.select("tbody"); // Select the table body
var error = d3.select("#error_message"); // Select error message area

// Event handlers to filter search
button.on("click", filterSearch);
form.on("submit", filterSearch);

/**
 * Formats table data.
 * 
 * This formats the data filled into the html table based on key type.
 * State and country are all uppercased. 
 * City names get initial capped based on first char, char following a space, and char following an open paren.
 * 
 * @param {string} key - Column from the data. Can be datetime, city, state, country, shape, durationMinutes, or comments
 * @param {string} value - Data value associated with each of the keys.
 * 
 */
function fixValueFormatting(key, value){
    
    // Capitalize the state and countries, since they're both intialisms.
    if (key === "state" || key === "country"){
        value = value.toUpperCase();
    };
   
    /*
     * Capitalize city names.
     * Adapted solution from StackOverflow users: nimeresam & Cristian Traìna.
     * Source:
     * https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
     */
    if (key === "city"){
        value = value.replace(/(^\w{1})|(\s+\w{1})|(\(\w{1})/g, match => match.toUpperCase());
    };

    return value;
};

/**
 * Sets initial state which shows all data.
 * 
 * This is the default state and shows all of the data found in data.js.
 * It clears the table, then adds new rows, cells, and cell values for the data.
 */
function init(){
    tbody.html(""); // Clear the table
    
    ufoData.forEach((ufoSightings) => {
        var row = tbody.append("tr"); // Add a row to the table for each iteration

        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td"); // Make a new cell for each entry
            value = fixValueFormatting(key, value); // Call function to format values
            cell.text(value); // Fill in cell values
        });
    });
};

/**
 * Handles enter/return key being pressed.
 * 
 * Connects to input class="form-control" in index.html.
 * 
 * @param {event} e - Event
 * 
 * Adapted from StackOverflow user TryingToImprove
 * Source: https://stackoverflow.com/questions/13987300/how-to-capture-enter-key-press
 * Combined with: https://keycode.info
 */
function handleEnter(e){
    if(e.key === "Enter"){
        e.preventDefault(); // Prevent page from refreshing
        filterSearch(); // Call filterSearch function
    };
};

/**
 * Filters the results, based on date in input field.
 */
function filterSearch(){
    
    error.text(""); // Proactively clear the error text area.

    /*
     * If the event isn't null, then prevent default refresh.
     * This works hand-in-hand with handleEnter function.
     */
    if (!d3.event == null){
        d3.event.preventDefault();
    };
    
    // Select the input element, get raw HTML node, then get the value.
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");

    // If nothing is entered, return the default state.
    if (inputValue === ""){
        init();
        return;
    };

    // Filter the data into a new array.
    var filteredData = ufoData.filter(sighting => sighting.datetime === inputValue);  

    // If the array is undefined or empty, print an error message on the site.
    if (filteredData === undefined || filteredData.length == 0) {
        tbody.html(""); // Clear the table to fill with new values
        error.text("No matches found. Try again. I believe in you."); // Print error on site
    }

    /*
     * If the array isn't empty, then a match has been found.
     * Clear the table and fill with the new, filtered data.
     */ 
    else{
        tbody.html(""); // Clear the table

        filteredData.forEach((ufoSightingsFiltered) => {
            var row = tbody.append("tr"); // Add a row to the table for each iteration

            Object.entries(ufoSightingsFiltered).forEach(([key, value]) => {
                var cell = row.append("td"); // Make a new cell for each entry
                value = fixValueFormatting(key, value); // Call function to format values
                cell.text(value); // Fill in cell values
            });
        });
    };
};

// Load default state and show all data.
init(); 