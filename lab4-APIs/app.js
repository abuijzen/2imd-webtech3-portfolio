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
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.summary;
            document.querySelector("body").appendChild(temp);
        })
    }

}


let app = new Weather('fb03a92b4a767e8e67a5662226ddb892');//API KEY
