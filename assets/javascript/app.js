console.log("Hello");

$(document).ready(function(){
    $('.sidenav').sidenav();
    // $("#second-column").hide();
    // $("#third-column").hide();

    // List of popular ingredients to feed the auto-complete function
    $('input.autocomplete').autocomplete({
        data: {"Apple": null, "Banana": null, "Carrot": null, "Cheese": null, "Bread": null, "Eggs": null, "Milk": null, "Onions": null, "Beans": null, "Rice": null, "Pork": null, "Beef": null,"Bacon": null,"Potatoes": null, "Butter": null,"Mushrooms": null, "Oil": null, "Lemons": null, "Noodles": null, "Chocolate": null, "Sausage": null, "Flour": null, "Vinegar": null, "Yogurt": null, "Peanut": null, }
    });


    $("#submit-ing-btn").on("click", function(event){
        event.preventDefault();
        // $("#second-column").show();
        // $("#third-column").show();
    });



});