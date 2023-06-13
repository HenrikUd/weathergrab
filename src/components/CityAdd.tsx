import React from 'react';
import { useState } from 'react';
import Forcities from './Forcities';



const CityAdd: (props: Forcities) => any = (props) => {
  
  
  const stateForecastTln = props.stateforecast;    // takes the API call props so it can be used for getting the values
  const stateForecastRiga = props.statecur1;
  const newCity = props.statecursearch;
  const newCity2 = props.statecursearch2;
  const newCity3 = props.statecursearch3;
  const newCity4 = props.statecursearch4;
  const newCity5 = props.statecursearch5;
  const newCity6 = props.statecursearch6;



const [deleteBtn, setDeleteBtn] = useState("");
const [deleteBtn2, setDeleteBtn2] = useState("");
const [deleteBtn3, setDeleteBtn3] = useState("");
const [deleteBtn4, setDeleteBtn4] = useState("");
const [deleteBtn5, setDeleteBtn5] = useState("");
const [deleteBtn6, setDeleteBtn6] = useState("");





const TallinnTemps = [                                // pre-loads temperatures for Tallinn
  stateForecastTln.location.name, stateForecastTln.current.temp_c, stateForecastTln.current.condition.text,'Wind', 
   stateForecastTln.current.wind_kph,'km/h','Tomorrow',
   stateForecastTln.forecast.forecastday[1].day.mintemp_c, - 
  stateForecastTln.forecast.forecastday[1].day.maxtemp_c, '°', stateForecastTln.current.condition.icon
]



  
 const RigaTemps = [                                  // pre-loads temperatures for Riga
   stateForecastRiga.location.name, stateForecastRiga.current.temp_c, stateForecastRiga.current.condition.text,'Wind',
    stateForecastRiga.current.wind_kph,'km/h','Tomorrow', 
   stateForecastRiga.forecast.forecastday[1].day.mintemp_c, - 
   stateForecastRiga.forecast.forecastday[1].day.maxtemp_c, '°', stateForecastRiga.current.condition.icon
]

 

 const AddNewCity: (string | number)[] = []             // pre-loads temperatures for all the other cities (6 max)
 if (props.statecursearch.length !== 0) {
  AddNewCity.push(newCity.location.name, newCity.current.temp_c, newCity.current.condition.text,'Wind', 
  newCity.current.wind_kph,'km/h','Tomorrow', 
  newCity.forecast.forecastday[1].day.mintemp_c, - 
  newCity.forecast.forecastday[1].day.maxtemp_c, '°', newCity.current.condition.icon)
}  
const AddNewCityJoin = AddNewCity.join(' ');


 const AddNewCity2: (string | number)[] = []             
 if (props.statecursearch2.length !== 0) {
  AddNewCity2.push(newCity2.location.name, newCity2.current.temp_c, newCity2.current.condition.text,'Wind', 
  newCity2.current.wind_kph,'km/h','Tomorrow', 
  newCity2.forecast.forecastday[1].day.mintemp_c, - 
  newCity2.forecast.forecastday[1].day.maxtemp_c, '°', newCity2.current.condition.icon)
}  
 
 const AddNewCityJoin2 = AddNewCity2.join(' ');


 const AddNewCity3: (string | number)[] = []             
 if (props.statecursearch3.length !== 0) {
  AddNewCity3.push(newCity3.location.name, newCity3.current.temp_c, newCity3.current.condition.text,'Wind', 
  newCity3.current.wind_kph,'km/h','Tomorrow', 
  newCity3.forecast.forecastday[1].day.mintemp_c, - 
  newCity3.forecast.forecastday[1].day.maxtemp_c, '°', newCity3.current.condition.icon)
}  
 
 const AddNewCityJoin3 = AddNewCity3.join(' ');


 const AddNewCity4: (string | number)[] = []             
 if (props.statecursearch4.length !== 0) {
  AddNewCity4.push(newCity4.location.name, newCity4.current.temp_c, newCity4.current.condition.text,'Wind', 
  newCity4.current.wind_kph,'km/h','Tomorrow', 
  newCity4.forecast.forecastday[1].day.mintemp_c, - 
  newCity4.forecast.forecastday[1].day.maxtemp_c, '°', newCity4.current.condition.icon)
}  
 
 const AddNewCityJoin4 = AddNewCity4.join(' ');


 const AddNewCity5: (string | number)[] = []             
 if (props.statecursearch5.length !== 0) {
  AddNewCity5.push(newCity5.location.name, newCity5.current.temp_c, newCity5.current.condition.text,'Wind', 
  newCity5.current.wind_kph,'km/h','Tomorrow', 
  newCity5.forecast.forecastday[1].day.mintemp_c, - 
  newCity5.forecast.forecastday[1].day.maxtemp_c, '°', newCity5.current.condition.icon)
}  
 
 const AddNewCityJoin5 = AddNewCity5.join(' ');


 const AddNewCity6: (string | number)[] = []             
 if (props.statecursearch6.length !== 0) {
  AddNewCity6.push(newCity6.location.name, newCity6.current.temp_c, newCity6.current.condition.text,'Wind', 
  newCity6.current.wind_kph,'km/h','Tomorrow', 
  newCity6.forecast.forecastday[1].day.mintemp_c, - 
  newCity6.forecast.forecastday[1].day.maxtemp_c, '°', newCity6.current.condition.icon)
  
}  
 
 const AddNewCityJoin6 = AddNewCity6.join(' ');
 const blank = '';


 

 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {    /* // click handler, on click sends state for button being pressed,
                                                                           and resets the previous state input to an empty string */
  event.preventDefault();
  setDeleteBtn('delete clicked');
  props.updateCurSearch('');  
};

const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setDeleteBtn2('delete clicked');
  props.updateCurSearch2('');  
};

const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setDeleteBtn3('delete clicked');
  props.updateCurSearch3('');  
};

const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setDeleteBtn4('delete clicked');
  props.updateCurSearch4('');  
};

const handleClick5 = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setDeleteBtn5('delete clicked');
  props.updateCurSearch5('');  
};

const handleClick6 = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setDeleteBtn6('delete clicked');
  props.updateCurSearch6('');  
};
  


const firstCity = () => {
  
  if ((deleteBtn === '' && AddNewCityJoin !== '') || (deleteBtn === 'delete clicked' && props.statecursearch.length !== 0)) {   
    
    return ( 
      
      
<div className="d-flex justify-content-start">
        
        <div className="border rounded">                                              
        <div className="row">
        <button className="border-0 removeCity text-dark bg-white" onClick={handleClick}>Remove</button>
        </div>
          <div>
          <h5 className="d-flex justify-content-start cityName">
        {AddNewCity[0]} 
        </h5>
        
        </div>
        <div className="container">
        <div className="row align-items-start">
        <div className="col-6">
          <div className="iconAndCelsius">
        <div className="d-flex justify-content-start align-items-start">
        <h3 className="celsiusNumber">
        {AddNewCity[1]}°
        </h3>
        
        <img className="conditionIcon" src={AddNewCity[10] as string} alt={AddNewCity[2] as string} />
        </div>
        </div>
        
        </div>
        
        
        
        <div className="col-6">
        <h5 className="d-flex justify-content-end wind">{AddNewCity[3]}</h5>
        <div className="d-flex justify-content-end align-items-start">
        
            <div className="d-flex align-self-center windSpeed">
            
        <p>{AddNewCity[4]} {AddNewCity[5]}</p> 
        </div>
        </div>
        <h5 className="d-flex justify-content-end text-center tomorrow">{AddNewCity[6]}</h5>
        <div className="d-flex justify-content-end align-items-center">
        
            <div className="d-flex align-self-center tomorrowTemp">
        <p>{AddNewCity[7]}{AddNewCity[8]}{AddNewCity[9]}</p>
        </div>
       </div>
       </div>
        
        </div>
        </div>
    </div>
    
        </div>
          
    
  
    )
  } else if (deleteBtn === 'delete clicked') {
    return blank
  } 
  
};  

const secondCity = () => {
  
  if ((deleteBtn2 === '' && AddNewCityJoin2 !== '') || (deleteBtn2 === 'delete clicked' && props.statecursearch2.length !== 0)) {   
    
    return ( 
      
      <div className="d-flex justify-content-start">
        
          <div className="border rounded">
          <div className="row">
          <button className="border-0 removeCity text-dark bg-white" onClick={handleClick2}>Remove</button>
          </div>
            <div>
            <h5 className="d-flex justify-content-start cityName">
          {AddNewCity2[0]} 
          </h5>
          
          </div>
          <div className="container">
          <div className="row align-items-start">
          <div className="col-6">
            <div className="iconAndCelsius">
          <div className="d-flex justify-content-start align-items-start">
          <h3 className="celsiusNumber">
          {AddNewCity2[1]}°
          </h3>
          
          <img className="conditionIcon" src={AddNewCity2[10] as string} alt={AddNewCity2[2] as string} />
          </div>
          </div>
          
          </div>
          
          
          
          <div className="col-6">
          <h5 className="d-flex justify-content-end wind">{AddNewCity2[3]}</h5>
          <div className="d-flex justify-content-end align-items-start">
          
              <div className="d-flex align-self-center windSpeed">
              
          <p>{AddNewCity2[4]} {AddNewCity2[5]}</p> 
          </div>
          </div>
          <h5 className="d-flex justify-content-end text-center tomorrow">{AddNewCity2[6]}</h5>
          <div className="d-flex justify-content-end align-items-center">
          
              <div className="d-flex align-self-center tomorrowTemp">
          <p>{AddNewCity2[7]}{AddNewCity2[8]}{AddNewCity2[9]}</p>
          </div>
         </div>
         </div>
          
          </div>
          </div>
      </div>
      
          </div>
  
    )
  } else if (deleteBtn2 === 'delete clicked') {
    return blank
  } 
  
};

const thirdCity = () => {
  
  if ((deleteBtn3 === '' && AddNewCityJoin3 !== '') || (deleteBtn3 === 'delete clicked' && props.statecursearch3.length !== 0)) {   
    
    return ( 
      
      <div className="d-flex justify-content-start">
        
          <div className="border rounded">
          <div className="row">
          <button className="border-0 removeCity text-dark bg-white" onClick={handleClick3}>Remove</button>
          </div>
            <div>
            <h5 className="d-flex justify-content-start cityName">
          {AddNewCity3[0]} 
          </h5>
          
          </div>
          <div className="container">
          <div className="row align-items-start">
          <div className="col-6">
            <div className="iconAndCelsius">
          <div className="d-flex justify-content-start align-items-start">
          <h3 className="celsiusNumber">
          {AddNewCity3[1]}°
          </h3>
          
          <img className="conditionIcon" src={AddNewCity3[10] as string} alt={AddNewCity3[2] as string} />
          </div>
          </div>
          
          </div>
          
          
          
          <div className="col-6">
          <h5 className="d-flex justify-content-end wind">{AddNewCity[3]}</h5>
          <div className="d-flex justify-content-end align-items-start">
          
              <div className="d-flex align-self-center windSpeed">
              
          <p>{AddNewCity3[4]} {AddNewCity3[5]}</p> 
          </div>
          </div>
          <h5 className="d-flex justify-content-end text-center tomorrow">{AddNewCity3[6]}</h5>
          <div className="d-flex justify-content-end align-items-center">
          
              <div className="d-flex align-self-center tomorrowTemp">
          <p>{AddNewCity3[7]}{AddNewCity3[8]}{AddNewCity3[9]}</p>
          </div>
         </div>
         </div>
          
          </div>
          </div>
      </div>
      
          </div>
  
    )
  } else if (deleteBtn3 === 'delete clicked') {
    return blank
  } 
  
};

const fourthCity = () => {
  
  if ((deleteBtn4 === '' && AddNewCityJoin4 !== '') || (deleteBtn4 === 'delete clicked' && props.statecursearch4.length !== 0)) {   
    
    return ( 
      
      <div className="d-flex justify-content-start">
        
          <div className="border rounded">
          <div className="row">
          <button className="border-0 removeCity text-dark bg-white" onClick={handleClick4}>Remove</button>
          </div>
            <div>
            <h5 className="d-flex justify-content-start cityName">
          {AddNewCity4[0]} 
          </h5>
          
          </div>
          <div className="container">
          <div className="row align-items-start">
          <div className="col-6">
            <div className="iconAndCelsius">
          <div className="d-flex justify-content-start align-items-start">
          <h3 className="celsiusNumber">
          {AddNewCity4[1]}°
          </h3>
          
          <img className="conditionIcon" src={AddNewCity4[10] as string} alt={AddNewCity4[2] as string} />
          </div>
          </div>
          
          </div>
          
          
          
          <div className="col-6">
          <h5 className="d-flex justify-content-end wind">{AddNewCity4[3]}</h5>
          <div className="d-flex justify-content-end align-items-start">
          
              <div className="d-flex align-self-center windSpeed">
              
          <p>{AddNewCity4[4]} {AddNewCity4[5]}</p> 
          </div>
          </div>
          <h5 className="d-flex justify-content-end text-center tomorrow">{AddNewCity4[6]}</h5>
          <div className="d-flex justify-content-end align-items-center">
          
              <div className="d-flex align-self-center tomorrowTemp">
          <p>{AddNewCity4[7]}{AddNewCity4[8]}{AddNewCity4[9]}</p>
          </div>
         </div>
         </div>
          
          </div>
          </div>
      </div>
      
          </div>
  
    )
  } else if (deleteBtn4 === 'delete clicked') {
    return blank
  } 
  
};


const fifthCity = () => {
  
  if ((deleteBtn5 === '' && AddNewCityJoin5 !== '') || (deleteBtn5 === 'delete clicked' && props.statecursearch5.length !== 0)) {   
    
    return ( 
      
      <div className="d-flex justify-content-start">
        
          <div className="border rounded">
          <div className="row">
          <button className="border-0 removeCity text-dark bg-white" onClick={handleClick5}>Remove</button>
          </div>
            <div>
            <h5 className="d-flex justify-content-start cityName">
          {AddNewCity5[0]} 
          </h5>
          
          </div>
          <div className="container">
          <div className="row align-items-start">
          <div className="col-6">
            <div className="iconAndCelsius">
          <div className="d-flex justify-content-start align-items-start">
          <h3 className="celsiusNumber">
          {AddNewCity5[1]}°
          </h3>
          
          <img className="conditionIcon" src={AddNewCity5[10] as string} alt={AddNewCity5[2] as string} />
          </div>
          </div>
          
          </div>
          
          
          
          <div className="col-6">
          <h5 className="d-flex justify-content-end wind">{AddNewCity5[3]}</h5>
          <div className="d-flex justify-content-end align-items-start">
          
              <div className="d-flex align-self-center windSpeed">
              
          <p>{AddNewCity5[4]} {AddNewCity5[5]}</p> 
          </div>
          </div>
          <h5 className="d-flex justify-content-end text-center tomorrow">{AddNewCity5[6]}</h5>
          <div className="d-flex justify-content-end align-items-center">
          
              <div className="d-flex align-self-center tomorrowTemp">
          <p>{AddNewCity5[7]}{AddNewCity5[8]}{AddNewCity5[9]}</p>
          </div>
         </div>
         </div>
          
          </div>
          </div>
      </div>
      
          </div>
  
    )
  } else if (deleteBtn5 === 'delete clicked') {
    return blank
  } 
  
};


const sixthCity = () => {
  
  if ((deleteBtn6 === '' && AddNewCityJoin6 !== '') || (deleteBtn6 === 'delete clicked' && props.statecursearch6.length !== 0)) {   
    
    return ( 
      
      <div className="d-flex justify-content-start">
        
          <div className="border rounded">
          <div className="row">
          <button className="border-0 removeCity text-dark bg-white" onClick={handleClick6}>Remove</button>
          </div>
            <div>
            <h5 className="d-flex justify-content-start cityName">
          {AddNewCity6[0]} 
          </h5>
          
          </div>
          <div className="container">
          <div className="row align-items-start">
          <div className="col-6">
            <div className="iconAndCelsius">
          <div className="d-flex justify-content-start align-items-start">
          <h3 className="celsiusNumber">
          {AddNewCity6[1]}°
          </h3>
          
          <img className="conditionIcon" src={AddNewCity6[10] as string} alt={AddNewCity6[2] as string} />
          </div>
          </div>
          
          </div>
          
          
          
          <div className="col-6">
          <h5 className="d-flex justify-content-end wind">{AddNewCity6[3]}</h5>
          <div className="d-flex justify-content-end align-items-start">
          
              <div className="d-flex align-self-center windSpeed">
              
          <p>{AddNewCity6[4]} {AddNewCity6[5]}</p> 
          </div>
          </div>
          <h5 className="d-flex justify-content-end text-center tomorrow">{AddNewCity6[6]}</h5>
          <div className="d-flex justify-content-end align-items-center">
          
              <div className="d-flex align-self-center tomorrowTemp">
          <p>{AddNewCity6[7]}{AddNewCity6[8]}{AddNewCity6[9]}</p>
          </div>
         </div>
         </div>
          
          </div>
          </div>
      </div>
      
          </div>
  
    )
  } else if (deleteBtn6 === 'delete clicked') {
    return blank
  } 
  
};



 
return (
  
  
    <>

<div className="d-flex justify-content-start">
  
    <div className="border rounded">
      <div>
      <h5 className="d-flex justify-content-start cityName">
    {TallinnTemps[0]} 
    </h5>
    
    </div>
    <div className="container">
    <div className="row align-items-start">
    <div className="col-6">
      <div className="iconAndCelsius">
    <div className="d-flex justify-content-start align-items-start">
    <h3 className="celsiusNumber">
    {TallinnTemps[1]}°
    </h3>
    
    <img className="conditionIcon" src={TallinnTemps[10]} alt={TallinnTemps[2]} />
    </div>
    </div>
    
    </div>
    
    
    
    <div className="col-6">
    <h5 className="d-flex justify-content-end wind">{TallinnTemps[3]}</h5>
    <div className="d-flex justify-content-end align-items-start">
    
        <div className="d-flex align-self-center windSpeed">
        
    <p>{TallinnTemps[4]} {TallinnTemps[5]}</p> 
    </div>
    </div>
    <h5 className="d-flex justify-content-end text-center tomorrow">{TallinnTemps[6]}</h5>
    <div className="d-flex justify-content-end align-items-center">
    
        <div className="d-flex align-self-center tomorrowTemp">
    <p>{TallinnTemps[7]}{TallinnTemps[8]}{TallinnTemps[9]}</p>
    </div>
   </div>
   </div>
    
    </div>
    </div>
</div>

    </div>
    
    <div className="border rounded">
    <div>
      <h5 className="d-flex justify-content-start cityName">
    {RigaTemps[0]} 
    </h5>
    </div>
    <div className="container">
    <div className="row align-items-start">
    <div className="col-6">
    <div className="iconAndCelsius">
    <div className="d-flex justify-content-start align-items-start">
    <h3 className="celsiusNumber">
    {RigaTemps[1]}°
    </h3>
    <img className="conditionIcon" src={RigaTemps[10]} alt={RigaTemps[2]} />
    </div>
    </div>
    </div>
    
    
    <div className="col-6">
    <h5 className="d-flex justify-content-end wind">{RigaTemps[3]}</h5>
    <div className="d-flex justify-content-end align-items-start">
    
        <div className="d-flex align-self-center windSpeed">
        
    <p>{RigaTemps[4]} {RigaTemps[5]}</p> 
    </div>
    </div>
    <h5 className="d-flex justify-content-end text-center tomorrow">{RigaTemps[6]}</h5>
    <div className="d-flex justify-content-end align-items-center">
    
        <div className="d-flex align-self-center tomorrowTemp">
    <p>{RigaTemps[7]}{RigaTemps[8]}{RigaTemps[9]}</p>
    </div>
   </div>
   </div>
    </div>
    </div>
    
    </div>
    
      {firstCity()}
    
      {secondCity()}
    
      {thirdCity()}
   
      {fourthCity()}
   
      {fifthCity()}
    
      {sixthCity()}
    
    
    </>
    


) 
  }
export default CityAdd
