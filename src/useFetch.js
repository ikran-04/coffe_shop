import {useEffect, useState } from "react";
const FetchData = () => {
    const [data,setData]=useState();
        const getData=()=>{
            fetch('http://localhost:6000/products'
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
}
 
export default FetchData;