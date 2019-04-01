class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.initialize();
    }

    initialize(){
        this.getMyLocation();
        //console.log(navigator);
    }

    getMyLocation(){

        navigator.geolocation.getCurrentPosition(position => { //function(position)

        console.log(position);
        
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.getWeather(lat,lng);

    }, err => {
        console.log("error");
    });
    }

    getWeather(lat,lng){

        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response =>{
            return response.json();
        })
        .then(json=>{
            console.log(json);
            let temp = document.querySelector("h1");
            temp.innerHTML = json.currently.summary;
            document.querySelector("#weather").appendChild(temp);
            localStorage.setItem("weather", temp);
            let weather = localStorage.getItem("weather");

            return this.temp;
                   
        }) 
    }
    
    //probere de functie uit te stellen zodat #weather al is ingevuld door getweather
    //daarna pas getGiphy starten
    if(getWeather){
        setTimeout(getGiphy),10000;
    }

}
let app = new Weather('fb03a92b4a767e8e67a5662226ddb892');//API KEY

/// foto's--------------------------------

class Giphy{

    constructor(API_KEY_GIPHY){
        this.API_KEY_GIPHY = API_KEY_GIPHY;
        this.initialize();
    }

    initialize(){
        this.getGiphy();
    }

    getGiphy(){

    let search = document.querySelector("#weather");
  
    let urlGiphy =`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${this.API_KEY_GIPHY}&limit=1&lang=en`;
    
    fetch(urlGiphy)

    .then(response =>{
    return response.json();
    })

    .then(json=>{
    console.log(json);
    
    //zet het item in een div
    let giphy = document.createElement("div");
            
            //krijg de eerste afbeelding terug uit de array
            let id = json.data[0]["id"];
            
            //test
            console.log("zoekterm is"+ search);

            giphy.innerHTML = `<img src=https://media0.giphy.com/media/${id}/giphy-preview.webp height="100">`;
            document.querySelector("#container").appendChild(giphy);
    });

}
    }

let newapp = new Giphy('yxRKm3nflyaTUlEIMhRfPMK4FmqdqIun');