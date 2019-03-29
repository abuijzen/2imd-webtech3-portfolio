class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        console.log("jow");
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
            document.querySelector("body").appendChild(temp);

            //localstorage.setItem("weather", response);
            //let weather = localstorage.getItem("weather");
        })
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

    let search = "rain";
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
            console.log("dit is de id van de image" + id);

            giphy.innerHTML = `<img src=https://media0.giphy.com/media/${id}/giphy-preview.webp>`;
            document.querySelector("#container").appendChild(giphy);





/*
    for (var i = 0; i<response.data.length; i++) {
        var giphyURL = response.data[i].images.fixed_height.url;
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        $("#searchResults").append(newImg);
    }*/

    //let imageSearch=(json.result[1]["imageSearch"]);
    //let imageSearch=(json.data[search]["url"]);
    //console.log(imageSearch);


        //let giphyURL = response.data[1].images.fixed_height.url;
        //let newImg = $("<img>");

        //giphy.innerHTML=`<img src=${giphyURL}">`;
        //document.getElementById("container").appendChild(giphy);
  
        //giphy.innerHTML='<img src= data[0].images.original.url)>';
        //document.getElementById("container").appendChild(giphy);
        //console.log(giphy);
    });

}
}

let newapp = new Giphy('yxRKm3nflyaTUlEIMhRfPMK4FmqdqIun');