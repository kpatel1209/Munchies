$(document).ready(function() {
    
    
    let searchResult = "beef";

    let queryURL = "https://api.edamam.com/search?q=" + searchResult + "&app_id=6d5a3956&app_key=7fec86da650323ec5cbd0d0c2ed5e986";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        // console.log(queryURL);
        // console.log(response);

        let results = response.hits;

        for (let i = 0; i < results.length; i++) {
            let name = results[i].recipe.label;
            let img = results[i].recipe.image;
            let diet = results[i].recipe.dietLabels;
            let prep = results[i].recipe.totalTime;
            let servings = results[i].recipe.yield;

            // console.log("Recipe Name: ",  name);
            // console.log("Image Link: ", img);
            // console.log("Diet Type: ", diet);
            // console.log("Prep Time: ", prep);
            // console.log("Servings: ", servings);
        }
    })
})


