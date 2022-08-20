import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormValues from './components/FormValues';
import './App.css';
import CityAdd from './components/CityAdd';


export default function App(props: any) {
  const [search, setSearch] = React.useState("");
  const { register, handleSubmit } = useForm<FormValues>();
  const [curSearch, setCurSearch] = React.useState("");
  const [curSearch2, setCurSearch2] = React.useState("");
  const [curSearch3, setCurSearch3] = React.useState("");
  const [curSearch4, setCurSearch4] = React.useState("");
  const [curSearch5, setCurSearch5] = React.useState("");
  const [curSearch6, setCurSearch6] = React.useState("");
  const [forecast, setForecast] = React.useState("");
  const [cur1, setCur1] = React.useState("");
  const [error, setError] = useState({});
  const [cityChange, setCityChange] = useState("")
  
 


  

          useEffect(() => {       
            // fetches API for Tallinn
      const urls = [
      'http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=Tallinn&days=2&aqi=no&alerts=no'
      

      ];
      Promise.all(
      urls.map((url) =>
        fetch(url)
            .then(response => response.json())
            .then(res => setForecast(res))
            .catch(err => setError(err))
      ),

      );

      }, []);


    useEffect(() => {                           // fetches API for Riga
        const urls = [
            'http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=Riga&days=2&aqi=no&alerts=no'
            


        ];
        Promise.all(
            urls.map((url) =>
                fetch(url)
                    .then(response => response.json())
                    .then(res => setCur1(res))
                    .catch(err => setError(err))
            ),

        );
        
    }, []);



  const onSubmit: any = async () => {       // on submit, takes the string from the input box, searches for that city, fetches and adds it
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
            setCityChange('')
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
      
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text"
            {...register("cityName")}
            placeholder="search for your city"
            value={search}
            onChange={e => setSearch(e.target.value)}
            

          ></input>

          <button type="submit"
          >add city</button>
        </form>
                        {forecast && cur1 && <CityAdd
                cchange={cityChange}    
                state={curSearch}                                   // using these props to transfer state data to CityAdd component
                statecur1={cur1}
                stateforecast={forecast}
                statecursearch={curSearch}
                statecursearch2={curSearch2}
                statecursearch3={curSearch3}
                statecursearch4={curSearch4}
                statecursearch5={curSearch5}
                statecursearch6={curSearch6}
                />}

        
      </div>

    </>
  );
}


