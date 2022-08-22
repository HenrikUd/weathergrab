import React from 'react';
import { useState } from 'react';


const CityAdd: (props: any) => any = (props: any) => {
  const stateForecastTln: any = props.stateforecast;    // takes the API call props so it can be used for getting the values
  const stateForecastRiga: any = props.statecur1;
  const newCity: any = props.statecursearch;
  const newCity2: any = props.statecursearch2;
  const newCity3: any = props.statecursearch3;
  const newCity4: any = props.statecursearch4;
  const newCity5: any = props.statecursearch5;
  let newCity6: any = props.statecursearch6;
  


const [deleteBtn, setDeleteBtn] = useState('');
const [deleteBtn2, setDeleteBtn2] = useState('');
const [deleteBtn3, setDeleteBtn3] = useState('');
const [deleteBtn4, setDeleteBtn4] = useState('');
const [deleteBtn5, setDeleteBtn5] = useState('');
const [deleteBtn6, setDeleteBtn6] = useState('');




const TallinnTemps = [                                // pre-loads temperatures for Tallinn
  stateForecastTln.location.name,'Current:', stateForecastTln.current.temp_c,'°',',',stateForecastTln.current.condition.text,'Wind:', 
   stateForecastTln.current.wind_kph,'km/h','Tomorrow:',
   stateForecastTln.forecast.forecastday[1].day.mintemp_c, - 
  stateForecastTln.forecast.forecastday[1].day.maxtemp_c, '°'
]

const TallinnTempsJoin = TallinnTemps.join(' ')      // join is used to put spaces between array elements

  
 const RigaTemps = [                                  // pre-loads temperatures for Riga
   stateForecastRiga.location.name,'Current:', stateForecastRiga.current.temp_c, '°',',',stateForecastTln.current.condition.text,'Wind:',
    stateForecastRiga.current.wind_kph,'km/h','Tomorrow:', 
   stateForecastRiga.forecast.forecastday[1].day.mintemp_c, - 
   stateForecastRiga.forecast.forecastday[1].day.maxtemp_c, '°'
]

 const RigaTempsJoin = RigaTemps.join(' ')
 

 const AddNewCity: React.ReactNode[] = []             // pre-loads temperatures for all the other cities (6 max)
 if (props.statecursearch.length !== 0) {
  AddNewCity.push(newCity.location.name,'Current:', newCity.current.temp_c,  '°',',',newCity.current.condition.text,'Wind:', 
  newCity.current.wind_kph,'km/h','Tomorrow:', 
  newCity.forecast.forecastday[1].day.mintemp_c, - 
  newCity.forecast.forecastday[1].day.maxtemp_c, '°')
}  
 
 const AddNewCityJoin = AddNewCity.join(' ');


 const AddNewCity2: React.ReactNode[] = []             
 if (props.statecursearch2.length !== 0) {
  AddNewCity2.push(newCity2.location.name,'Current:', newCity2.current.temp_c,  '°',',',newCity2.current.condition.text,'Wind:', 
  newCity2.current.wind_kph,'km/h','Tomorrow:', 
  newCity2.forecast.forecastday[1].day.mintemp_c, - 
  newCity2.forecast.forecastday[1].day.maxtemp_c, '°')
}  
 
 const AddNewCityJoin2 = AddNewCity2.join(' ');


 const AddNewCity3: React.ReactNode[] = []             
 if (props.statecursearch3.length !== 0) {
  AddNewCity3.push(newCity3.location.name,'Current:', newCity3.current.temp_c,  '°',',',newCity3.current.condition.text,'Wind:', 
  newCity3.current.wind_kph,'km/h','Tomorrow:', 
  newCity3.forecast.forecastday[1].day.mintemp_c, - 
  newCity3.forecast.forecastday[1].day.maxtemp_c, '°')
}  
 
 const AddNewCityJoin3 = AddNewCity3.join(' ');


 const AddNewCity4: React.ReactNode[] = []             
 if (props.statecursearch4.length !== 0) {
  AddNewCity4.push(newCity4.location.name,'Current:', newCity4.current.temp_c,  '°',',',newCity4.current.condition.text,'Wind:', 
  newCity4.current.wind_kph,'km/h','Tomorrow:', 
  newCity4.forecast.forecastday[1].day.mintemp_c, - 
  newCity4.forecast.forecastday[1].day.maxtemp_c, '°')
}  
 
 const AddNewCityJoin4 = AddNewCity4.join(' ');


 const AddNewCity5: React.ReactNode[] = []             
 if (props.statecursearch5.length !== 0) {
  AddNewCity5.push(newCity5.location.name,'Current:', newCity5.current.temp_c,  '°',',',newCity5.current.condition.text,'Wind:', 
  newCity5.current.wind_kph,'km/h','Tomorrow:', 
  newCity5.forecast.forecastday[1].day.mintemp_c, - 
  newCity5.forecast.forecastday[1].day.maxtemp_c, '°')
}  
 
 const AddNewCityJoin5 = AddNewCity5.join(' ');


 const AddNewCity6: React.ReactNode[] = []             
 if (props.statecursearch6.length !== 0) {
  AddNewCity6.push(newCity6.location.name,'Current:', newCity6.current.temp_c,  '°',',',newCity6.current.condition.text,'Wind:', 
  newCity6.current.wind_kph,'km/h','Tomorrow:', 
  newCity6.forecast.forecastday[1].day.mintemp_c, - 
  newCity6.forecast.forecastday[1].day.maxtemp_c, '°')
  
}  
 
 let AddNewCityJoin6 = AddNewCity6.join(' ');
 const blank: string = '';


 

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
  
  if (deleteBtn === '' && AddNewCityJoin !== '' || deleteBtn === 'delete clicked' && props.statecursearch !== '') {   
    
    return ( 
      
    <div>{AddNewCityJoin}
    <button onClick={handleClick}
            
    >X</button>
    
    </div>
  
    )
  } else if (deleteBtn === 'delete clicked') {
    return blank
  } 
  
};

const secondCity = () => {
  
  if (deleteBtn2 === '' && AddNewCityJoin2 !== '' || deleteBtn2 === 'delete clicked' && props.statecursearch2 !== '') {   
    
    return ( 
      
    <div>{AddNewCityJoin2}
    <button onClick={handleClick2}
            
    >X</button>
    
    </div>
  
    )
  } else if (deleteBtn2 === 'delete clicked') {
    return blank
  } 
  
};

const thirdCity = () => {
  
  if (deleteBtn3 === '' && AddNewCityJoin3 !== '' || deleteBtn3 === 'delete clicked' && props.statecursearch3 !== '') {   
    
    return ( 
      
    <div>{AddNewCityJoin3}
    <button onClick={handleClick3}
            
    >X</button>
    
    </div>
  
    )
  } else if (deleteBtn3 === 'delete clicked') {
    return blank
  } 
  
};

const fourthCity = () => {
  
  if (deleteBtn4 === '' && AddNewCityJoin4 !== '' || deleteBtn4 === 'delete clicked' && props.statecursearch4 !== '') {   
    
    return ( 
      
    <div>{AddNewCityJoin4}
    <button onClick={handleClick4}
            
    >X</button>
    
    </div>
  
    )
  } else if (deleteBtn4 === 'delete clicked') {
    return blank
  } 
  
};


const fifthCity = () => {
  
  if (deleteBtn5 === '' && AddNewCityJoin5 !== '' || deleteBtn5 === 'delete clicked' && props.statecursearch5 !== '') {   
    
    return ( 
      
    <div>{AddNewCityJoin5}
    <button onClick={handleClick5}
            
    >X</button>
    
    </div>
  
    )
  } else if (deleteBtn5 === 'delete clicked') {
    return blank
  } 
  
};


const sixthCity = () => {
  
  if (deleteBtn6 === '' && AddNewCityJoin6 !== '' || deleteBtn6 === 'delete clicked' && props.statecursearch6 !== '') {   
    
    return ( 
      
    <div>{AddNewCityJoin6}
    <button onClick={handleClick6}
            
    >X</button>
    
    </div>
  
    )
  } else if (deleteBtn6 === 'delete clicked') {
    return blank
  } 
  
};






 
return (
<ul>
    <>
    <li>
    {TallinnTempsJoin} 
    </li>
    <li>
    {RigaTempsJoin}
    </li>
    <li>
    
      {firstCity()}
    </li>
    <li>
    
      {secondCity()}
    </li>
     <li>
    
      {thirdCity()}
    </li>
    <li>
    
      {fourthCity()}
    </li>
    <li>
      
      {fifthCity()}
    </li>
    <li>
      
      {sixthCity()}
    </li> 
  
  
    </>
</ul>

) 
  }
export default CityAdd
