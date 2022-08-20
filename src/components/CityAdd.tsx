import React from 'react';
import { useState, useEffect } from 'react';


const CityAdd: (props: any) => any = (props: any) => {
  const stateForecastTln: any = props.stateforecast;    // takes the API call props so it can be used for getting the values
  const stateForecastRiga: any = props.statecur1;
  const newCity: any = props.statecursearch;
  const newCity2: any = props.statecursearch2;
  const newCity3: any = props.statecursearch3;
  const newCity4: any = props.statecursearch4;
  const newCity5: any = props.statecursearch5;
  let newCity6: any = props.statecursearch6;
  let clickCity: string = props.cchange;
  


const [deleteBtn, setDeleteBtn] = useState('');
const [firstState, setFirstState] = useState('');
const [secondState, setSecondState] = useState('');
const [thirdState, setThirdState] = useState('');
const [fourthState, setFourthState] = useState('');
const [fifthState, setFifthState] = useState('');
const [sixthState, setSixthState] = useState('');









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
 if (props.state.length !== 0) {
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
 const strinz: string = '';


 

 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setDeleteBtn('delete clicked');
  setFirstState(AddNewCityJoin)
  
  
};

  
  


/* const myDelBtn: any = () => { 
  if (AddNewCityJoin6 !== '' || AddNewCityJoin5 !== '' || AddNewCityJoin4 !== '' || AddNewCityJoin3 !== '' || AddNewCityJoin2 !== '' 
  || AddNewCityJoin !== '') 
  return (
    <button onClick={handleClick}
            
    >Remove city</button>
  )
}; */

console.log(deleteBtn)

const firstCity = () => {
  
  if (deleteBtn === '' && AddNewCityJoin !== '' || deleteBtn === 'delete clicked' && AddNewCityJoin !== firstState) {   
    
    return ( 
      
    <div>{AddNewCityJoin}
    <button onClick={handleClick}
            
    >X</button>
    
    </div>
  
    )
  } else if (deleteBtn === 'delete clicked') {
    return strinz
  } 
  
};

const secondCity = () => {
  if (deleteBtn === '' || deleteBtn === 'delete clicked' && AddNewCityJoin2 !== secondState) {   
    
    return  AddNewCityJoin2
  } if (deleteBtn === 'delete clicked') {
    return strinz
  } 
};

const thirdCity = () => {
  if (deleteBtn === '' || deleteBtn === 'delete clicked' && AddNewCityJoin3 !== thirdState) {   
    
    return  AddNewCityJoin3
  } if (deleteBtn === 'delete clicked') {
    return strinz
  } 
};

const fourthCity = () => {
  if (deleteBtn === '' || deleteBtn === 'delete clicked' && AddNewCityJoin4 !== fourthState) {   
    
    return  AddNewCityJoin4
  } if (deleteBtn === 'delete clicked') {
    return strinz
  } 
};

const fifthCity = () => {
  if (deleteBtn === '' || deleteBtn === 'delete clicked' && AddNewCityJoin5 !== fifthState) {   
    
    return  AddNewCityJoin5
  } if (deleteBtn === 'delete clicked') {
    return strinz
  } 
};



const sixthCity = () => {
  if (deleteBtn === '' || deleteBtn === 'delete clicked' && AddNewCityJoin6 !== sixthState) {   
    
    return  AddNewCityJoin6
  } if (deleteBtn === 'delete clicked') {
    return strinz
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
