class Weather{
    constructor(API_KEY,API_KEY_GIPHY){
        this.API_KEY_ = API_KEY;
        this.API_KEY_GIPHY= API_KEY_GIPHY;
        this.initialize();
    }

    initialize(){
        this.getMyLocation();
        this.getGiphy();
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
            document.querySelector("h1").appendChild(temp);
        })
    }

/*
    getGiphyData(){

    var url=`https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY_GIPHY}&q=sunny`

        fetch(url)
        .then(data => data.json())
        .then(res =>{
            console.log(res)

            var arrayOfGifs = res.data
            var firstItem = arrayOfGifs[0];
            var giphyLink = firstItem.image.fixed_width.url
            document.querySelector('#gif').setAttribute('src',giphyLink)
        })

        .catch(error => console.log(error))
*/

        getGiphy(){

        let search = "cat";
        let urlGiphy =`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${this.API_KEY_GIPHY}&limit=1&lang=en`;
       


        fetch(urlGiphy)
        .then(response =>{
        return response.json();
        console.log($urlGiphy);

        })
        .then(json=>{
        console.log(json);
        let giphy = document.createElement("div");
        let search = "sunny";
        let imageSearch=(json.data[search]["url"]);

        
        giphy.innerHTML=`<img src= "https://media3.giphy.com/media/AC8n0wdJvnA6A/200_s.gif">`;
        //giphy.innerHTML=`<img src= (giphy.data[0].images.original.url)>`;
        document.getElementById("container").appendChild(giphy);
        console.log(giphy);
        })

    }

}



let app = new Weather(`fb03a92b4a767e8e67a5662226ddb892`,`yxRKm3nflyaTUlEIMhRfPMK4FmqdqIun`);