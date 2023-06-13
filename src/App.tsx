import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormValues from './components/FormValues';
import './App.css';
import CityAdd from './components/CityAdd';
import UseEffects from './components/UseEffects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AsyncPaginate } from 'react-select-async-paginate';


export default function App() {
  const [search, setSearch] = React.useState<string>("");
  const [cityState, setCityState] = React.useState<string>("");
  const { handleSubmit } = useForm<FormValues>();
  const [curSearch, setCurSearch] = React.useState<string | number | any>("");
  const [curSearch2, setCurSearch2] = React.useState<string | number | any>("");
  const [curSearch3, setCurSearch3] = React.useState<string | number | any>("");
  const [curSearch4, setCurSearch4] = React.useState<string | number | any>("");
  const [curSearch5, setCurSearch5] = React.useState<string | number | any>("");
  const [curSearch6, setCurSearch6] = React.useState<string | number | any>("");
  const [forecast, setForecast] = React.useState<string | number | any>("");
  const [cur1, setCur1] = React.useState<string | number | any>("");
  const [error, setError] = useState(null);

  
  async function loadOptions(search: string, loadedOptions: unknown[] | any) {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}${search}${loadedOptions.length}`);
    const responseJSON = await response.json();
    
   
    return {
      options: responseJSON.map((id: { lat: number; lon: number; name: string; country: string; }) => {
        return {
          value: `${id.lat} ${id.lon}`,
          label: `${id.name}, ${id.country}`,
        };
  })}}

const handleOnChange = (searchData: Record<string, unknown> | any) => {
  setSearch(searchData);
  
   setCityState(searchData.label)
  
};




  
   const onSubmit = async () => {       // on submit, takes the string from the input box, searches for that city, fetches and adds it
                                            // 6 times max (6 new cities)
                                         
    try {

      if (search !== "") {

        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}${cityState}&days=2&aqi=no&alerts=no`);
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        const json = await res.json();
        if (Object.keys(curSearch).length === 0) {
          setCurSearch(json);
          
        }


        if (Object.keys(curSearch).length !== 0) {

          const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}${cityState}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch2 === "") {
            setCurSearch2(json);
            
          }

        }

        if (curSearch2 !== "") {

          const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}${cityState}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch3 === "") {
            setCurSearch3(json);
            
          }

        }
        if (curSearch3 !== "") {

          const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}${cityState}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch4 === "") {
            setCurSearch4(json);
            
          }



        }
        if (curSearch4 !== "") {

          const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}${cityState}&days=2&aqi=no&alerts=no`);
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
          const json = await res.json();
          if (curSearch5 === "") {
            setCurSearch5(json);
            
          }

        }
        if (curSearch5 !== "") {

          const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}${cityState}&days=2&aqi=no&alerts=no`);
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

          <AsyncPaginate     
            placeholder="search for your city"
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}    
          />




          <button type="submit"
                  className="btn btn-primary"
          >add city</button>
          
        </form>
        </div>
        <UseEffects                                                    // sending set state hooks to the UseEffects component
        setTheForecast={setForecast}
        setTheError={setError}
        setTheCur1={setCur1}
        searchData={search}
        /> 


                        {forecast && cur1 && <CityAdd
              statecur1={cur1}
              stateforecast={forecast} // using these props to transfer state data to CityAdd component
              statecursearch={curSearch} updateCurSearch={setCurSearch}
              statecursearch2={curSearch2} updateCurSearch2={setCurSearch2}
              statecursearch3={curSearch3} updateCurSearch3={setCurSearch3}
              statecursearch4={curSearch4} updateCurSearch4={setCurSearch4}
              statecursearch5={curSearch5} updateCurSearch5={setCurSearch5}
              statecursearch6={curSearch6} updateCurSearch6={setCurSearch6} TallinnTemps={[]} src={undefined} alt={undefined}                />}

        
      </div>
      </div>      
      </div>              
    </>
  );
}


