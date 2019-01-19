$(document).ready(function() {

    let searchResult = [];

    // Variables for Add/Remove ingredient button.
    let maxField = 10; //Input fields increment limitation
    let x = 1; //Initial field counter is 1

    // Add ingredients to array and display for the user
    $("#add-ing-btn").on("click", function(event) {
        event.preventDefault();

        let food = $("#new-ingredient").val().trim();

        searchResult.push(food);
        let newIngLine = '<input type="text" class="old-ingredient" data-index="' + x + '" value="' + food + '" style="height: 2rem; font-size: 13px; color: white;">'; //New input field
        console.log(newIngLine);
        // Check max number of input fields
        if(x < maxField) {
            x++; //Incrememnt field counter
            $("#user-ing-list").append(newIngLine);
            
        };

        $("#user-ing-input").html('<input type="text" class="autocomplete" id="new-ingredient" placeholder="(Entry Required)" required style="height: 2rem; font-size: 13px; color: white;">');
            // Autocomplete function has to be ran for each new field that is added dynamically.         
            $("input.autocomplete").autocomplete({
                data: {"Apple": null, "Banana": null, "Carrot": null, "Cheese": null, "Bread": null, "Eggs": null, "Milk": null, "Onions": null, "Beans": null, "Rice": null, "Chicken": null, "Pork": null, "Beef": null,"Bacon": null,"Potatoes": null, "Butter": null,"Mushrooms": null, "Oil": null, "Lemons": null, "Noodles": null, "Chocolate": null, "Sausage": null, "Flour": null, "Vinegar": null, "Yogurt": null, "Peanut": null, "Cabbage": null, "Avocado": null, "Ham": null, "Steak": null, "Eggplant": null, "Grapes": null, "Acai": null, "Apricot": null, "Blackberry": null, "Blueberries": null, "Cucumber": null, "Cocounut": null, "Guava": null, "Kiwi": null, "Lime": null, "Mango": null, "Melon": null, "Orange": null, "Papaya": null, "Peach": null, "Pear": null, "Plum": null, "Pineapple": null, "Pomegranate": null, "Rasberries": null, "Stawberries": null, "Olive": null, "Tomatoes": null, "Zucchini": null, "Corn": null, "Broccoli": null, "Lettuce": null, "Celery": null, "Kale": null, "Cauliflower": null, "Asparagus": null, "Radish": null, "Garlic": null, "Okra": null, "Pepper": null, "Spinach": null, "Beet": null, "Yams": null, "Duck": null, "Venison": null, "Lamb": null, "Goat": null, "Turkey": null, "Veal": null, "Ham": null, "Bologne": null, "Lasagne": null, "Spaghetti": null, "Macaroni": null, "Ravioli": null, "Rigatoni": null, "Linguine": null, "Tortellini": null, "Cereal": null, "Penne": null, "Orzo": null, "Margarine": null}
            });
    });

    // Remove ingredients from the array and remove the ingredient from the div
    $("#remove-ing-btn").on("click", function(event) {
        event.preventDefault();

        $(".old-ingredient").remove();

        x--; // Decrement field counter
        // console.log(removeIngButton);
    });

    $("#submit-ing-btn").on("click", function(event) {
        event.preventDefault();
        
        $("#recipe-loadins").empty();
        
        // Clear local storage for this search results
        localStorage.clear();

        let queryURL = "https://api.edamam.com/search?q=" + searchResult + "&app_id=6d5a3956&app_key=7fec86da650323ec5cbd0d0c2ed5e986";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            // Console log the queryURL and response
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
                let url = results[i].recipe.url;
    
                // Console log each of the API call results
                // console.log("Recipe Name: ", name);
                // console.log("Image Link: ", img);
                // console.log("Diet Type: ", diet);
                // console.log("Prep Time: ", prep);
                // console.log("Servings: ", servings);
                // console.log("Ingredients List: ", ingredients);
                // console.log("URL: ", url);

                // Store all the required results into local storage
                localStorage.setItem(`name${[i]}`, JSON.stringify(name));
                localStorage.setItem(`image${[i]}`, JSON.stringify(img));
                localStorage.setItem(`diet${[i]}`, JSON.stringify(diet));
                localStorage.setItem(`prep${[i]}`, JSON.stringify(prep));
                localStorage.setItem(`servings${[i]}`, JSON.stringify(servings));
                localStorage.setItem(`ingredients${[i]}`, JSON.stringify(ingredients));
                localStorage.setItem(`url${[i]}`, JSON.stringify(url));
    
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
                                        <p class="prep">Prep Time: ${prep} minutes</p>
                                        <p class="diet">Diet: ${diet}</p>
                                        <p class="yield">Servings: ${servings}</p>
                                        <a class="view-button waves-effect waves-light btn-small" data-index="${i}" style="font-size: 13px; color: black; font-weight: bold;">View Info</a>
                                    </div>
                                    <div>    
                                        <img src="${img}" id="recipe-image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
    
                // Append the recipe data to display to the HTML
                $("#recipe-loadins").append(recipe);  // recipe-loadins id to HTML
            }
        })
    });


    $(document).on("click", '.view-button', function() {
        let index = ("index", $(this).data('index'));
        // console.log(index);
        
        let recipeName = JSON.parse(localStorage.getItem(`name${index}`));
        let recipeIngredients = JSON.parse(localStorage.getItem(`ingredients${index}`));
        let recipeURL = JSON.parse(localStorage.getItem(`url${index}`));

        // console.log(recipeIngredients);

        $("#ingredient-list").empty();

        $("#ingredient-list").html(`
            <h6 class="white-text" id="recipe-ingredients" style="color: white; font-family: 'Roboto', sans-serif;"><strong>Recipe Ingredients:</strong></h6>
        `)

        for (let i = 0; i < recipeIngredients.length; i++) { 
            let ingredientSide = $(`
                <p class="ingredientLines" style="color: white; font-family: 'Roboto', sans-serif;">- ${recipeIngredients[i]}</p>
            `);
            $("#ingredient-list").append(ingredientSide);
        };
        
        let urlSide = $(`
            <a href="${recipeURL}" class="recipeURL" target="_blank" style="color: white; font-family: 'Roboto', sans-serif;">${recipeURL}</a>
        `);
        
        $(".recipeURL").html(urlSide);
    });

});
