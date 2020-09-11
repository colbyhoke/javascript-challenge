// from data.js
var ufoData = data;

/**
 * Select everything needed
 * ADD DOCUMENTATION
 * 
 */
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Select the table body
var tbody = d3.select("tbody");

/**
 * INITIAL STATE
 * ADD DOCUMENTATION
 * 
 * 
 */
function init(){
    // Dynamically fill in the table from data.js
    ufoData.forEach((ufoSightings) => {
    
        // Check output
        //console.log(ufoSightings)
        var row = tbody.append("tr");

        Object.entries(ufoSightings).forEach(([key, value]) => {
            // Check output
            //console.log(key, value);

            // Make the table data standardized (format it)
            if (key === "state" || key === "country"){
                value = value.toUpperCase();
            };

            // Capitalize city names
            // Solution from StackOverflow users nimeresam and Cristian Traìna
            // Source:
            // https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
            if (key === "city"){
                value = value.replace(/(^\w{1})|(\s+\w{1})/g, match => match.toUpperCase());
            };

            // Add handler to clean up the data in duration and comments columns

            // Make a new row for each entry
            var cell = row.append("td");
            
            // Fill in cell values
            cell.text(value);
        });
    });
};

// Event handlers to filter search
button.on("click", filterSearch);
form.on("submit", filterSearch);

/**
 * Handle the Enter button being pressed
 * Adapted from StackOverflow user TryingToImprove
 * Source: https://stackoverflow.com/questions/13987300/how-to-capture-enter-key-press
 * Combined with: https://keycode.info
 */
function handle(e){
    if(e.key === "Enter"){
        e.preventDefault(); // Prevent page from refreshing
        filterSearch(); // Call filterSearch function
    };
};

// Filter the results, based on date in input field
function filterSearch(){

    // Prevent page from refreshing
    if (!d3.event == null){
        d3.event.preventDefault();
    };
    
    /**
     * Select the input element
     * Get raw HTML node
     * Get the value
     */
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");

    // Check output (uncomment to see)
    //console.log(inputValue);
    //console.log(ufoData);

    // Filter the data
    var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);

    // Check final output before writing to page (uncomment to see)
    //console.log(filteredData);

    // Clear the table to fill with new values
    tbody.html("");

    filteredData.forEach((ufoSightingsFiltered) => {
        var row = tbody.append("tr"); // Add a row to the table per 

        Object.entries(ufoSightingsFiltered).forEach(function([key, value]) {
            /*console.log(key, value);*/
            // Make a new row for each entry
            var cell = row.append("td");
            // Fill in cell values
            cell.text(value);
        });


    }); 
};


// Load default state = show all
init();