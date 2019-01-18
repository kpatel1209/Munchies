$(document).ready(function() {

    let ingredientList = [];

    // $("#add-ing-btn").on("change", function(){
    //     let ingred = $("#user-ing-input").val(this.value);
    //     // let ingredientList = [];
    //     // ingredientList.push(ingred);
    //     console.log(ingred);
    // });
    
    $("#submit-ing-btn").on("click", function(){
        
        let searchResult = ["beef", "onion"];

        console.log(searchResult);

        // Clear local storage for this search results
        localStorage.clear();

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
                let ingredients = results[i].recipe.ingredientLines;
    
                // Console log each of the API call results
                console.log("Recipe Name: ", name);
                console.log("Image Link: ", img);
                console.log("Diet Type: ", diet);
                console.log("Prep Time: ", prep);
                console.log("Servings: ", servings);
                
                // Store all the required results into local storage
                localStorage.setItem("name", JSON.stringify(name));
                localStorage.setItem("image", JSON.stringify(img));
                localStorage.setItem("diet", JSON.stringify(diet));
                localStorage.setItem("prep", JSON.stringify(prep));
                localStorage.setItem("servings", JSON.stringify(servings));
                localStorage.setItem("ingredients", JSON.stringify(ingredients));
    
                // Add the HTML for the recipe card to the DOM with the results from the API call
                let recipe = $(`
                    <div class="row">
                        <div class="col s12">
                            <div class="card" id="recipe-boxes">
                                <div class="card-content" id="recipe-content">
                                    <div class="recipe-title">
                                        <h6 class="lable center" id="recipe-name"> 
                                            <strong>${name}</strong>
                                            <i class="material-icons" id="fav-icon">favorite_border</i>
                                        </h6>
                                    </div>                                        
                                    <div class="recipe-text">
                                        <p class="prep">Prep Time: ${prep}</p>
                                        <p class="diet">Diet: ${diet}</p>
                                        <p class="yield">Servings: ${servings}</p>
                                    </div>
                                    <div>    
                                        <img src="${img}" id="recipe-image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
    
                $("#recipe-loadins").append(recipe);
            }
         })
    });
});


