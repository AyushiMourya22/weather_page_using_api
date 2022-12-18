let weather = {
  apiKey: "cd1504d09e3763532d872082f309af04",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid="+this.apiKey
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.display(data);
        // console.log(data)
      });
  },
  display:function(data){
    const name=data.name;
    const icon=data.weather[0].icon;
    const description=data.weather[0].description;
    const temp=data.main.temp;
    const humidity=data.main.humidity;
    const speed=data.wind.speed;
    console.log(name,temp,description,icon,humidity,speed)
    // cinst

    document.querySelector("#icon").src="http://openweathermap.org/img/wn/"+icon+".png"
    document.querySelector("#cityname").innerText="Weather in "+name;
    document.querySelector("#temp").innerText="Temperature: "+temp+ "`C";
    document.querySelector("#des").innerText="Descripiton: "+description;
    document.querySelector("#humid").innerText="Humidity: "+humidity+"%";
    document.querySelector("#wind").innerText="Wind Speed: : "+speed+"km/hr"; 
    document.querySelector("#weather").classList.remove("loading")
    const n=name.toLowerCase();
    // document.querySelector("#main").style.backgroundImage="url(https://unsplash.com/s/photos/"+n+")"
  },
  search:function(){
    this.fetchWeather(document.querySelector("#city").value)
  }
};

document.querySelector("#sub").addEventListener("click",function(){
  weather.search()
})
document.querySelector("#city").onkeydown=function(event){
  if(event.keyCode==13)
  weather.search()
}

weather.fetchWeather("Varanasi")