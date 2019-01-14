
let searchResult = "beef";


let queryURL = "https://api.edamam.com/search?q=" + searchResult + "&app_id=6d5a3956&app_key=7fec86da650323ec5cbd0d0c2ed5e986"


$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    console.log(queryURL);
    console.log(response);

    let results = response.data;
})

