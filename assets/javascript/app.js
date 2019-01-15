$(document).ready(function(){
    
    // The 2nd and 3rd box will be hidden when the page loads, after the user clicks the Submit button, the boxes will appear.
    /* $("#second-box").hide();
    $("#third-box").hide();*/
    
    // Mobile sidenav function where hamburger menu will display when screen is minimized to certain width
    $('.sidenav').sidenav();

    // List of popular ingredients to feed the auto-complete function under the Enter Your Ingredients section.
    $("input.autocomplete").autocomplete({
        data: {"Apple": null, "Banana": null, "Carrot": null, "Cheese": null, "Bread": null, "Eggs": null, "Milk": null, "Onions": null, "Beans": null, "Rice": null, "Pork": null, "Beef": null,"Bacon": null,"Potatoes": null, "Butter": null,"Mushrooms": null, "Oil": null, "Lemons": null, "Noodles": null, "Chocolate": null, "Sausage": null, "Flour": null, "Vinegar": null, "Yogurt": null, "Peanut": null, "Cabbage": null, "Avocado": null, "Ham": null, "Steak": null, "Eggplant": null, "Grapes": null, "Acai": null, "Apricot": null, "Blackberry": null, "Blueberries": null, "Cucumber": null, "Cocounut": null, "Guava": null, "Kiwi": null, "Lime": null, "Mango": null, "Melon": null, "Orange": null, "Papaya": null, "Peach": null, "Pear": null, "Plum": null, "Pineapple": null, "Pomegranate": null, "Rasberries": null, "Stawberries": null, "Olive": null, "Tomatoes": null, "Zucchini": null, "Corn": null, "Broccoli": null, "Lettuce": null, "Celery": null, "Kale": null, "Cauliflower": null, "Asparagus": null, "Radish": null, "Garlic": null, "Okra": null, "Pepper": null, "Spinach": null, "Beet": null, "Yams": null, "Duck": null, "Venison": null, "Lamb": null, "Goat": null, "Turkey": null, "Veal": null, "Ham": null, "Bologne": null, "Lasagne": null, "Spaghetti": null, "Macaroni": null, "Ravioli": null, "Rigatoni": null, "Linguine": null, "Tortellini": null, "Cereal": null, "Penne": null, "Orzo": null, "Margarine": null}
    });

    // Variables for Add/Remove ingredient button.
    let maxField = 10; //Input fields increment limitation
    let addIngButton = $("#add-ing-btn"); //Add Ingredient button selector
    let removeIngButton = $("#remove-ing-btn"); //Remove Ingredient button selector
    let ingInputLine = $("#user_ing-input"); //Input field
    let newIngLine = '<input type="text" class="autocomplete" id="new-ingredient" placeholder="(Entry Required)" style="height: 2rem; font-size: 13px; color: white;">'; //New input field
    let x = 1; //Initial field counter is 1

    // Function for ADD ingredient button which allows user to add lines to enter additional ingredients.
    $(addIngButton).click(function(event){
        event.preventDefault();
        //Check max number of input fields
        if(x < maxField) {
            x++; //Incrememnt field counter
            $(ingInputLine).prepend(newIngLine);
            // Autocomplete function has to be ran for each new field that is added dynamically.         
            $("input.autocomplete").autocomplete({
                data: {"Apple": null, "Banana": null, "Carrot": null, "Cheese": null, "Bread": null, "Eggs": null, "Milk": null, "Onions": null, "Beans": null, "Rice": null, "Pork": null, "Beef": null,"Bacon": null,"Potatoes": null, "Butter": null,"Mushrooms": null, "Oil": null, "Lemons": null, "Noodles": null, "Chocolate": null, "Sausage": null, "Flour": null, "Vinegar": null, "Yogurt": null, "Peanut": null, "Cabbage": null, "Avocado": null, "Ham": null, "Steak": null, "Eggplant": null, "Grapes": null, "Acai": null, "Apricot": null, "Blackberry": null, "Blueberries": null, "Cucumber": null, "Cocounut": null, "Guava": null, "Kiwi": null, "Lime": null, "Mango": null, "Melon": null, "Orange": null, "Papaya": null, "Peach": null, "Pear": null, "Plum": null, "Pineapple": null, "Pomegranate": null, "Rasberries": null, "Stawberries": null, "Olive": null, "Tomatoes": null, "Zucchini": null, "Corn": null, "Broccoli": null, "Lettuce": null, "Celery": null, "Kale": null, "Cauliflower": null, "Asparagus": null, "Radish": null, "Garlic": null, "Okra": null, "Pepper": null, "Spinach": null, "Beet": null, "Yams": null, "Duck": null, "Venison": null, "Lamb": null, "Goat": null, "Turkey": null, "Veal": null, "Ham": null, "Bologne": null, "Lasagne": null, "Spaghetti": null, "Macaroni": null, "Ravioli": null, "Rigatoni": null, "Linguine": null, "Tortellini": null, "Cereal": null, "Penne": null, "Orzo": null, "Margarine": null}
            });
        }
    });
    // Function for REMOVE ingredient button which allows user to remove lines that they originally added.  Since the ADD function is prepending a new line, the REMOVE function will now remove the most recent line added.
    $(removeIngButton).click(function(event){
        event.preventDefault();
        $("#new-ingredient").remove();
        x--;
        console.log(removeIngButton);
    });
    




    $("#submit-ing-btn").on("click", function(event){
        event.preventDefault();

        // The 2nd and 3rd box will appear after the Submit button is clicked.
        /* $("#second-box").show();
        $("#third-box").show();*/


    });



});