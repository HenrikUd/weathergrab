
const CityAdd: (props: any) => any = (props: any) => {
  


const stateCurArray: Array<Object> = Object.values(props.statecursearch)        // gets data from App component through props, then converts to array so they can be used
const stateCurArray2: Array<Object> = Object.values(props.statecursearch2)
const stateCurArray3: Array<Object> = Object.values(props.statecursearch3)
const stateCurArray4: Array<Object> = Object.values(props.statecursearch4)
const stateCurArray5: Array<Object> = Object.values(props.statecursearch5)
const stateCurArray6: Array<Object> = Object.values(props.statecursearch6)
const stateCurTemp: Array<Object> = Object.values(props.statecur)
const stateCur1Temp: Array<Object> = Object.values(props.statecur1)

const stateForecast: any = Object.entries(props.stateforecast)



const newArray: any = [];
const newArray2: any = [];

const pushMapFunc = stateForecast.map((x: any) => { newArray.push(x)
  newArray.map((x: any) => console.log(x.day))
  

})


const BlahBuncFunc = pushMapFunc.map((x: any) => { newArray2.push(x)
  newArray2.map((x: any) => console.log(x.day))
  

})

  console.log(stateForecast)

 


const getNameTempTallinn =  (stateForecast as unknown as any[]).map(({name, wind_kph, temp_c, tz_id}: any) => {   // Takes the name and current temp for Riga
  return <li key={`stateCurTemp-${tz_id}`}>
    {name}
    {temp_c}&nbsp;&nbsp; {wind_kph}
    
    
  </li>  
  
 })
  

   const addCity = (stateCurArray as unknown as any[]).map(({name, temp_c, tz_id, wind_kph}: any) => {     // Takes the name and current temp for the added city
    if (props.state.length !== 0) {
   return <li key={`props.state-${tz_id}`}>
       {name}
       {temp_c}&nbsp;&nbsp; {wind_kph}
   </li>
      
      

   } 
 });

 const addCity2 = (stateCurArray2 as unknown as any[]).map(({name, temp_c, tz_id, wind_kph}: any) => {     // Takes the name and current temp for the added city
  if (props.state.length !== 0) {
 return <li key={`props.state-${tz_id}`}>
        {name}
       {temp_c}&nbsp;&nbsp; {wind_kph}
 </li>
 
 
 } 
});
const addCity3 = (stateCurArray3 as unknown as any[]).map(({name, temp_c, tz_id, wind_kph}: any) => {     // Takes the name and current temp for the added city
  if (props.state.length !== 0) {
 return <li key={`props.state-${tz_id}`}>
        {name}
       {temp_c}&nbsp;&nbsp; {wind_kph}
 </li>
 
 
 } 
});
const addCity4 = (stateCurArray4 as unknown as any[]).map(({name, temp_c, tz_id, wind_kph}: any) => {     // Takes the name and current temp for the added city
  if (props.state.length !== 0) {
 return <li key={`props.state-${tz_id}`}>
        {name}
       {temp_c}&nbsp;&nbsp; {wind_kph}
 </li>
 
 
 } 
});
const addCity5 = (stateCurArray5 as unknown as any[]).map(({name, temp_c, tz_id, wind_kph}: any) => {     // Takes the name and current temp for the added city
  if (props.state.length !== 0) {
 return <li key={`props.state-${tz_id}`}>
        {name}
       {temp_c}&nbsp;&nbsp; {wind_kph}
 </li>
 
 
 } 
});
const addCity6 = (stateCurArray6 as unknown as any[]).map(({name, temp_c, tz_id, wind_kph}: any) => {     // Takes the name and current temp for the added city
  if (props.state.length !== 0) {
 return <li key={`props.state-${tz_id}`}>
        {name}
       {temp_c}&nbsp;&nbsp; {wind_kph}
 </li>
 
 
 } 
});
 
  
  const getNameTempRiga =  (stateCur1Temp as unknown as any[]).map(({name, wind_kph, temp_c, tz_id}: any) => {   // Takes the name and current temp for Riga
   return <li key={`curTempRiga-${tz_id}`}>
     {name}
     {temp_c}&nbsp;&nbsp; {wind_kph}
     
     
   </li>  
   
  })
 
return (
<div>

    {getNameTempTallinn}
    {getNameTempRiga}
    {addCity} 
    {addCity2}
    {addCity3}
    {addCity4}
    {addCity5}
    {addCity6}
  
</div>

) 
  }
export default CityAdd
