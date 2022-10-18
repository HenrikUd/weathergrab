import search from "../App";

 
 

const OnSubmitting: any = async (props: any) => {        // on submit, takes the string from the input box, searches for that city, fetches and adds it
    // 6 times max (6 new cities)
    
try {

if (props.thesearch !== "") {

const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${search}&days=2&aqi=no&alerts=no`);
if (!res.ok) {
throw new Error(`HTTP error: ${res.status}`);
}
const json = await res.json();
if (props.statecursearch === "") {
props.updateCurSearch(json);

}


if (props.statecursearch !== "") {

const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${props.props.thesearch}&days=2&aqi=no&alerts=no`);
if (!res.ok) {
throw new Error(`HTTP error: ${res.status}`);
}
const json = await res.json();
if (props.statecursearch2 === "") {
props.updateCurSearch2(json);

}

}

if (props.statecursearch2 !== "") {

const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${props.value}&days=2&aqi=no&alerts=no`);
if (!res.ok) {
throw new Error(`HTTP error: ${res.status}`);
}
const json = await res.json();
if (props.statecursearch3 === "") {
props.updateCurSearch3(json);

}

}
if (props.statecursearch3 !== "") {

const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${props.value}&days=2&aqi=no&alerts=no`);
if (!res.ok) {
throw new Error(`HTTP error: ${res.status}`);
}
const json = await res.json();
if (props.statecursearch4 === "") {
props.updateCurSearch4(json);

}



}
if (props.statecursearch4 !== "") {

const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${props.value}&days=2&aqi=no&alerts=no`);
if (!res.ok) {
throw new Error(`HTTP error: ${res.status}`);
}
const json = await res.json();
if (props.statecursearch5 === "") {
props.updateCurSearch5(json);

}

}
if (props.statecursearch5 !== "") {

const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5a303d06da64310805163248221205&q=${props.value}&days=2&aqi=no&alerts=no`);
if (!res.ok) {
throw new Error(`HTTP error: ${res.status}`);
}
const json = await res.json();
if (props.statecursearch6 !== undefined) {
props.updateCurSearch6(json);

}
}
}
}
catch (error) {
alert('City not found, please check your input for typos')
console.error(`Could not get city, check your input for typos: ${error}`);
}
};

export default OnSubmitting;