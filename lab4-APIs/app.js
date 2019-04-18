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
  
    getGiphy(weather){
      console.log("GETTIN GIPHY FOR: " + weather);

      let search = weather;
  
      let urlGiphy =`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=yxRKm3nflyaTUlEIMhRfPMK4FmqdqIun&limit=1&lang=en`;
      
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
  
              giphy.innerHTML = `<img src=https://media0.giphy.com/media/${id}/giphy-preview.webp height="100">`;
              document.querySelector("#container").appendChild(giphy);
      });


    }

    getWeather(lat,lng){

        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response =>{
            return response.json();
        })
        .then(json=>{
            //console.log(json);
            let summary = json.currently.summary; // partly cloudy
            let temp = document.querySelector("h1");
            temp.innerHTML = summary;
            //document.querySelector("#weather").append(summary);
            localStorage.setItem("weather", summary);
          
            
            // API 2
            this.getGiphy(summary);
                 
        }) 
    }
    
   

}
let app = new Weather('fb03a92b4a767e8e67a5662226ddb892');//API KEY
