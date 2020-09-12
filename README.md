# javascript-challenge
## Assignment:
#### WAKE UP SHEEPLE!
The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There's just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they're having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a dataset we provide. We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.
You can handle this... right? The planet Earth needs to know what we have found!

## Execution
The assignment was completed in two levels:
* Level 1 filters the data based on a user-input date.
* Level 2 filters the data based on user input in conjunction with a dropdown to filter by 5 fields:
    * date
    * city
    * state
    * country
    * shape

I did some extra handling:
* Let the enter key be a form submit
* Format the city, state, and country values to look better
* If nothing is entered, then return the default state
* If no matches are found, alert the user and clear any evidence of a table


#### Level 1 looks like:
![level 1 screenshot](screenshots/ufo_finder_l1.jpg)
It's accessible here: https://colbyhoke.github.io/javascript-challenge/UFO-level-1/

#### Level 2 results look like:
![level 2 screenshot](screenshots/ufo_finder_l2.jpg)
It's accessible here: https://colbyhoke.github.io/javascript-challenge/UFO-level-2/

#### Level 2 filter selection looks like:
![level 2 filter screenshot](screenshots/ufo_finder_l2_filter.jpg)