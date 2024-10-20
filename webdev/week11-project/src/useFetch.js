import {useState,useEffect} from "react";

export function useFetch(url, delay) {
    const [data, setData] = useState(null);

    const fetchData = async function getData() {

        const response = await fetch(url);
        const json = await response.json();
        setData(json.title);
    
      };
    
    useEffect(function(){
      
      fetchData();
    },[url]);
    useEffect(function() {
  const timer = setInterval(fetchData, delay);

  return function() {
    clearInterval(timer);
  }
},[]);
    return data;
    
}