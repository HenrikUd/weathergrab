

const CityFunctions: (props: any) => JSX.Element = (props: any) => {

let addCityTemp = Object.values(props.statecursearch);                                   // city that will be added on input
const addCityMap = (addCityTemp as unknown as any[]).map(item => item.condition);
const addNewMap = Array.from(Object.entries(addCityMap));
const newNewMap = addNewMap.pop();
 let theNewAddedarray = newNewMap?.map(Object.values);
const stateWeatherNew: React.ReactNode[] = []
  if (theNewAddedarray !== undefined) {
   stateWeatherNew.push(theNewAddedarray[1][0])
 }  


 let addCityTemp2 = Object.values(props.statecursearch2);                                // city that will be added on input 2
 const addCityMap2 = (addCityTemp2 as unknown as any[]).map(item => item.condition);
 const addNewMap2 = Array.from(Object.entries(addCityMap2));
 const newNewMap2 = addNewMap2.pop();
  let theNewAddedarray2 = newNewMap2?.map(Object.values);
 const stateWeatherNew2: React.ReactNode[] = []
   if (theNewAddedarray2 !== undefined) {
    stateWeatherNew2.push(theNewAddedarray2[1][0])
  }  

  let addCityTemp3 = Object.values(props.statecursearch3);                                // city that will be added on input 2
  const addCityMap3 = (addCityTemp3 as unknown as any[]).map(item => item.condition);
  const addNewMap3 = Array.from(Object.entries(addCityMap3));
  const newNewMap3 = addNewMap3.pop();
   let theNewAddedarray3 = newNewMap3?.map(Object.values);
  const stateWeatherNew3: React.ReactNode[] = []
    if (theNewAddedarray3 !== undefined) {
     stateWeatherNew3.push(theNewAddedarray3[1][0])
   }  

   let addCityTemp4 = Object.values(props.statecursearch4);                                // city that will be added on input 2
  const addCityMap4 = (addCityTemp4 as unknown as any[]).map(item => item.condition);
  const addNewMap4 = Array.from(Object.entries(addCityMap4));
  const newNewMap4 = addNewMap4.pop();
   let theNewAddedarray4 = newNewMap4?.map(Object.values);
  const stateWeatherNew4: React.ReactNode[] = []
    if (theNewAddedarray4 !== undefined) {
     stateWeatherNew4.push(theNewAddedarray4[1][0])
   }  

   let addCityTemp5 = Object.values(props.statecursearch5);                                // city that will be added on input 2
  const addCityMap5 = (addCityTemp5 as unknown as any[]).map(item => item.condition);
  const addNewMap5 = Array.from(Object.entries(addCityMap5));
  const newNewMap5 = addNewMap5.pop();
   let theNewAddedarray5 = newNewMap5?.map(Object.values);
  const stateWeatherNew5: React.ReactNode[] = []
    if (theNewAddedarray5 !== undefined) {
     stateWeatherNew5.push(theNewAddedarray5[1][0])
   }  

   let addCityTemp6 = Object.values(props.statecursearch6);                                // city that will be added on input 2
   const addCityMap6 = (addCityTemp6 as unknown as any[]).map(item => item.condition);
   const addNewMap6 = Array.from(Object.entries(addCityMap6));
   const newNewMap6 = addNewMap6.pop();
    let theNewAddedarray6 = newNewMap6?.map(Object.values);
   const stateWeatherNew6: React.ReactNode[] = []
     if (theNewAddedarray6 !== undefined) {
      stateWeatherNew6.push(theNewAddedarray6[1][0])
    } 

 

 
  
 // const curTempRiga = Object.values(props.statecur1);             // pre-loads Riga weather status e.g currently sunny, rainy, cloudy
 // const elMapRiga = (curTempRiga as unknown as any[]).map(item => item.condition);
// const newMapRiga = Array.from(Object.entries(elMapRiga));
// const newNewRiga = newMapRiga.pop();
 // let theNewarrayRiga = newNewRiga?.map(Object.values);
 // const stateWeatherRiga: React.ReactNode[] = []
  // if (theNewarrayRiga !== undefined) {
  //  stateWeatherRiga.push(theNewarrayRiga[1][0])
  //}


  return (
    <div>
     
      
      <ul>
        {stateWeatherNew}
        </ul>
        
        <ul>
        {stateWeatherNew2}
        </ul>
        <ul>
        {stateWeatherNew3}
        </ul>
        <ul>
        {stateWeatherNew4}
        </ul>
        <ul>
        {stateWeatherNew5}
        </ul>
        <ul>
        {stateWeatherNew6}
        </ul>
    </div>
  )
}

  export default CityFunctions