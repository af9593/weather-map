export function loadCitiesFromLocalStorage(){
    let JSONCities = localStorage.getItem("cities");
    if(JSONCities == null){
        localStorage.setItem("cities", JSON.stringify([]))
        return [];
    }

    let cities = JSON.parse(JSONCities);
    return cities;
}

export function removeCityFromLocalStorage(id){
    var cities = loadCitiesFromLocalStorage();
    cities = cities.filter(function(city){
        return city.id !== id;
    })
    localStorage.setItem("cities", JSON.stringify(cities));
}

export function checkLocalStorage(cityInput){
    let cityExists = false;
    var cities = loadCitiesFromLocalStorage();
    cities.map((item) =>{
        if(item.name === cityInput.name){
            console.log('already exits');
            cityExists = true;
            alert(item.name+' is already saved in favorites');
        }
    })
    
    if(cityExists === false){
        alert('Added '+cityInput.name+' to favorites');
        addCityToLocalStorage(cityInput);
    }
}

export function addCityToLocalStorage(cityInput){
    var cities = loadCitiesFromLocalStorage();
        
    cities.push(cityInput)

    localStorage.setItem("cities", JSON.stringify(cities));
}



