import { useEffect } from 'react';


interface Foreffects { 
    setTheForecast: React.Dispatch<React.SetStateAction<string>>;
    setTheError: React.Dispatch<React.SetStateAction<{}>>;
    setTheCur1: React.Dispatch<React.SetStateAction<string>>
}


const UseEffects: (props: Foreffects) => Function | any = (props: Foreffects) => {
    
 useEffect(() => {                        // fetches API for Tallinn  
    
const urls = [
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}Tallinn&days=2&aqi=no&alerts=no`
];

Promise.all(
urls.map((url) =>
fetch(url)
    .then(response => response.json())
    .then(res => props.setTheForecast(res))
    .catch(err => props.setTheError(err))
),

);

}, []);


useEffect(() => {                           // fetches API for Riga
const urls = [
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}Riga&days=2&aqi=no&alerts=no` 
];
Promise.all(
    urls.map((url) =>
        fetch(url)
            .then(response => response.json())
            .then(res => props.setTheCur1(res))
            .catch(err => props.setTheError(err))
    ),

);

}, [])};


export default UseEffects;