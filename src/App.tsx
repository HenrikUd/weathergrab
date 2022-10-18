import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormValues from './components/FormValues';
import './App.css';
import CityAdd from './components/CityAdd';
import UseEffects from './components/UseEffects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [search, setSearch] = React.useState<string>("");
  const { register, handleSubmit } = useForm<FormValues>();
  const [curSearch, setCurSearch]: any = React.useState("");
  const [curSearch2, setCurSearch2]: any = React.useState("");
  const [curSearch3, setCurSearch3]: any = React.useState("");
  const [curSearch4, setCurSearch4]: any = React.useState("");
  const [curSearch5, setCurSearch5]: any = React.useState("");
  const [curSearch6, setCurSearch6]: any = React.useState("");
  const [forecast, setForecast]: any = React.useState("");
  const [cur1, setCur1]: any = React.useState("");
  const [error, setError] = useState({});
  
  

   const onSubmit = async () => {       // on submit, takes the string from the input box, searches for that city, fetches and adds it
                                            // 6 times max (6 new cities)
                                            
    try {

      if (search !== "") {

        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${search}&days=2&aqi=no&alerts=no`);
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        const json = await res.json();
        if (curSearch === "") {
          setCurSearch(json);
          
        }


        if (curSearch !== "") {

          const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${search}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch2 === "") {
            setCurSearch2(json);
            
          }

        }

        if (curSearch2 !== "") {

          const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${search}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch3 === "") {
            setCurSearch3(json);
            
          }

        }
        if (curSearch3 !== "") {

          const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${search}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch4 === "") {
            setCurSearch4(json);
            
          }



        }
        if (curSearch4 !== "") {

          const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${search}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch5 === "") {
            setCurSearch5(json);
            
          }

        }
        if (curSearch5 !== "") {

          const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${search}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch6 !== undefined) {
            setCurSearch6(json);
            
          }
        }
      }
    }
    catch (error) {
      alert('City not found, please check your input for typos')
      console.error(`Could not get city, check your input for typos: ${error}`);
    }
  }; 


 

  return (
    <>
      <div className="container-fluid">
      <div className="row height d-flex justify-content-center align-items-top">
      <div className="col-md-8">
        <div className="search">
        <i className="fa fa-search">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </i>
        <form onSubmit={handleSubmit(onSubmit)}
        >

          <input type="text"
            {...register("cityName")}
            placeholder="search for your city"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-control"
            

          ></input>

          <button type="submit"
                  className="btn btn-primary"
          >add city</button>
        </form>
        </div>
        <UseEffects                                                    // sending set state hooks to the UseEffects component
        setTheForecast={setForecast}
        setTheError={setError}
        setTheCur1={setCur1}
        
        /> 


                        {forecast && cur1 && <CityAdd
          statecur1={cur1}
          stateforecast={forecast} // using these props to transfer state data to CityAdd component
          statecursearch={curSearch} updateCurSearch={setCurSearch}
          statecursearch2={curSearch2} updateCurSearch2={setCurSearch2}
          statecursearch3={curSearch3} updateCurSearch3={setCurSearch3}
          statecursearch4={curSearch4} updateCurSearch4={setCurSearch4}
          statecursearch5={curSearch5} updateCurSearch5={setCurSearch5}
          statecursearch6={curSearch6} updateCurSearch6={setCurSearch6} TallinnTemps={[]}                />}

        
      </div>
      </div>      
      </div>              
    </>
  );
}


