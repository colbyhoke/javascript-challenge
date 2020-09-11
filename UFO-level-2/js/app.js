// from data.js
var ufoData = data;

/**
 * Select everything needed
 * ADD DOCUMENTATION
 * 
 * 
 */
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Select the table body
var tbody = d3.select("tbody");


/**
 * Initial state
 * ADD DOCUMENTATION
 * 
 * 
 */
function init(){
    // Dynamically fill in the table from data.js
    ufoData.forEach(function(ufoSightings){
    
        // Check output
        //console.log(ufoSightings)
        var row = tbody.append("tr");

        Object.entries(ufoSightings).forEach(function([key, value]) {
            // Check output
            //console.log(key, value);

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
d3.selectAll("#selector").on("change", filterByDropdown);

filterByDropdown







// Filter the results, based on date in input field
function filterSearch(){

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element & get raw HTML node
    var inputElement = d3.select(".form-control");
    //console.log(inputElement)

    // Get the value
    var inputValue = inputElement.property("value");

    // Check output (uncomment to see)
    //console.log(inputValue);
    //console.log(ufoData);

    // Filter the data
    var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);

    console.log(filteredData);

    // Clear the table to fill with new values
    tbody.html("");

    filteredData.forEach(function(ufoSightingsFiltered) {
        
        
        var row = tbody.append("tr");

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


