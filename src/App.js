import React from "react";
import Titles from "./Components/Titles";
import "./App.css";
import Form from "./Components/Form";
import Weather from "./Components/Weather";


const API_KEY ="a67d34336bd3fbc5aa3884cc0920de47";

class App extends React.Component {

   state={
    temperature:"",
    humidity:"",
    city:""
  }

   getWeather = async(e) => {
    e.preventDefault();
     const city = e.target.elements.City.value;
     const country = e.target.elements.Country.value;
     const api_call =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data=await api_call.json();

  if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description:data.weather[0].description,
        error:undefined
      });

     } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values..."
      });
    }
   }

  render(){ 
  return(
  <div className="Wrapper">
  <div className="container">
  <div className="row app_container">
    <div className="col-5 titles_container">
    <Titles />
    </div>
      <div className="col-7 form_container">
         <Form getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature} 
              country={this.state.country}
              humidity={this.state.humidity} 
              description={this.state.description}
              city={this.state.city} 
              error={this.state.error}
            />
    </div>
  </div> 
  </div>
  </div>
  );
  }
};

export default App;