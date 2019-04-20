import React from "react";

const Form = props =>{
  return( 
    <form onSubmit={props.getWeather} className="form__container">
    <input  name="City" type="text" placeholder="enter city.." /> 
    <input name="Country" type="text" placeholder="enter country.." />
    <button>Get Weather</button>
    </form>
  );
};

export default Form;