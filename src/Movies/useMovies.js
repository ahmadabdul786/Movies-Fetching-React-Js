import { useEffect,useState } from "react";
const KEY = "80c1da26";
export default function useMovies(query){
      const [movies, setMovies] = useState([]);
      const [isLoading,setIsLoading] = useState(true);
      const [error, setError] = useState(null);
    useEffect(function(){
        const controller = new AbortController();
       async function fetchMovies(){
     setIsLoading(true);
     try{
      if(query.length<3) return;
     const res = await fetch(` http://www.omdbapi.com/?apikey=${KEY} &s=${query}`,
        {signal:controller.signal});
     if(res.Response === 'False'){
        throw new Error('unable to fetch data');
      } 
     const data =  await res.json();
     console.log(data);
      setMovies(data.Search);
     }
     catch(err){
      console.error(err.message);
      if(err.name!=='AbortError'){
        setError(err.message);
      }
      
     }
     
     finally{
      setIsLoading(false)
     }
      
       
      } 
      fetchMovies();
      return function(){
        controller.abort();
      }
      },[query])

return{isLoading,movies,error} 
   }