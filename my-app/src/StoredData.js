
//fetch the stored cities from local storage     ** överföra denna metod till branchen för 0.6 kraven  
function loadCities(){
    let JSONCities = localStorage.getItem("cities");

    if(JSONCities == null){
        localStorage.setItem("cities", JSON.stringify([]))
        return [];
    }

    let cities = JSON.parse(JSONCities);
    return cities;
}

//denna metod kan kallas varje gång en city läggs till och ska visa den
function printCities(cities){
    for(var i=0; i < cities.length; i++){
        let city = cities[i];
        console.log(city.cityname);


        /* < här kan staden visas  > */


    }

    
}


function removeCity(){



    var cities = loadCities();
    var cities = cities.filter(function(city){
        //return city.cityname != 
    })

}


function addCities(){
    //let cityInput = "Lund";
    let cityInput = $("#cityname").val();
    
    if(cityInput.length != 0){
        var cities = loadCities();
        
        cities.push({
            cityname: cityInput
        })

        localStorage.setItem("cities", JSON.stringify(cities));

        printCities(cities);
        

    }else if(cityInput.length == 0){
        alert("Please eneter a city!");
    }
}


$("#save-movie").on("click", function(e) {
    e.preventDefault();

    addCities();

});

$(document).ready(function (){
    let allCities  = loadCities();
    printCities(allCities);
});