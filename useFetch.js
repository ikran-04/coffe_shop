import {useEffect } from "react";
const FetchData = () => {
    const [data,setData]=useState([]);
        const getData=()=>{
            fetch('data.json'
            ,{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }
            )
              .then(function(response){
                console.log(response)
                return response.json();
              })
              .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
              });
          }
          useEffect(()=>{
            getData()
          },[])
          return {data}
     
}
 
export default FetchData;