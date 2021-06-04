
export function loadCitiesFromLocalStorage(){
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


export function removeCityFromLocalStorage(id){
    var cities = loadCitiesFromLocalStorage();
    cities = cities.filter(function(city){
        return city.id !== id;
    })
    localStorage.setItem("cities", JSON.stringify(cities));

}

export function addCityToLocalStorage(cityInput){
        
    var cities = loadCitiesFromLocalStorage();
        
    cities.push(cityInput)

    localStorage.setItem("cities", JSON.stringify(cities));

    printCities(cities);
}



