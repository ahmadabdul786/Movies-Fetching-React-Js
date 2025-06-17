import { Children, useEffect, useState } from "react";
import StarRating  from "../StarRating";
import './usePopCorn.css';
import { useRef } from "react";
import useMovies from "./useMovies";
import useKey from "./useKey";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
function NavBar({children}){
  
  return<nav className="nav-bar">
  
  {children}
</nav>
}
function Logo(){
  return<div className="logo">
  <span role="img">🍿</span>
  <h1>usePopcorn</h1>
</div>
}
function Input({query,setQuery}){
const inputEl =  useRef(null);  
  
 useKey('Enter', function(){
  if(inputEl.current === document.activeElement){
    return;
  }
    inputEl.current.focus();
    setQuery('');
 });

  return<input
  className="search"
  type="text"
  placeholder="Search movies..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  ref={inputEl}
/>
}
function NumOfMovies({movies}){
  return<p className="num-results">
    Found <strong>{movies?.length}</strong> results
  </p>
}

const KEY = "80c1da26";







export default function UsePopCorn() {
  
  const [selectedId,setSelectedId] = useState(null);
  const [query,setQuery] = useState('inception');

  
  const [watched, setWatched] = useState(function(){
    const storedValue = localStorage.getItem('watched');
    return JSON.parse(storedValue);
  });
  
function settingId(id){
setSelectedId(id);
}
function closingMovieDetails(){
  setSelectedId(null);
}
function handleAddWatched(movie){
  setWatched(watched => [...watched,movie]);
}
useEffect(function(){
    localStorage.setItem('watched',JSON.stringify(watched));
  },[watched]);

function handleDeleteItem(id){
  setWatched(watched=> watched.filter(movie=>movie.imdbID!==id));
}
  
const {isLoading,movies,error} = useMovies(query);
  return (
    <>
      <NavBar>
      <Logo/>
      <Input query={query} setQuery={setQuery}/>    
      <NumOfMovies movies={movies}/>  
      </NavBar>
      
      <Main>
      <Box>
       {isLoading&&<Loader/>}
       {error&&<Error error = {error}/>}
        {!isLoading&&!error&&<MovieList passingId={settingId} movies={movies}/>}

      </Box>
      <Box>
    
    {selectedId?<MovieDetails
     selectedId={selectedId}
      setSelectedId={setSelectedId} 
      closingMovieDetails={closingMovieDetails}
    handleAddWatched={handleAddWatched}
    watched={watched}/>:
    <><WatchedSummary watched={watched}/>
    <WatchedmovieList deleteWatchedMovie={handleDeleteItem} watched={watched}/>
    </>}
    </Box>
      </Main>
      
    </>
  );
}
function Error({error}){
  return<div className="error">
    <p>⛔{error}</p>
  </div>
}
function Loader(){
  return<div className="loader">
    Loading...
  </div>
}
function Main({children}){
  
    
  return<main className="main">
 {children}
</main>
}

function Box({children}){
  const [isOpen, setIsOpen] = useState(true);
  
  return  <div className="box">
  <button
    className="btn-toggle"
    onClick={() => setIsOpen((open) => !open)}
  >
    {isOpen ? "–" : "+"}
  </button>
  {isOpen && (
  children
  )}
</div>
}

function MovieList({movies,passingId}){
 

 return  <ul className="list list-movies">
  {movies?.map((movie) => (
    <Movie 
    movie={movie}
    passingId={passingId}
    key={movie.imdbID}/>
  ))}
</ul>
}
function Movie({movie,passingId}){
  return <li onClick={()=>passingId(movie.imdbID)} >
  <img src={movie.Poster} alt={`${movie.Title} poster`} />
  <h3>{movie.Title}</h3>
  <div>
    <p>
      <span>🗓</span>
      <span>{movie.Year}</span>
    </p>
  </div>
</li>
}
/*function WatchedBox(){
   const [watched, setWatched] = useState(tempWatchedData);
  
  const [isOpen2, setIsOpen2] = useState(true);

  

 return <div className="box">
  <button
    className="btn-toggle"
    onClick={() => setIsOpen2((open) => !open)}
  >
    {isOpen2 ? "–" : "+"}
  </button>
  {isOpen2 && (
    <>
    <WatchedSummary watched={watched}/>
    <WatchedmovieList watched={watched}/>
    </>
  )}
</div>
}
*/
function MovieDetails({selectedId,closingMovieDetails,handleAddWatched,setSelectedId,watched}){

  const [movie,setMovie] = useState({});
  const [isLoading,setIsLoading] = useState(false);
 const [userRating,setUserRating] = useState('');
  function handleAdd(){
    const newWatchedMovie = {
      imdbID:movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
      runtime: parseInt(movie.Runtime),
      imdbRating:parseInt(movie.imdbRating),
      userRating,
    }
handleAddWatched(newWatchedMovie);
setSelectedId(null);
  }

  const isWatched = watched.map((movie)=>movie.imdbID).includes(selectedId);
  const Rated = watched.find(movie=> movie.imdbID ===selectedId)?.userRating;
  console.log(Rated);

useEffect(function(){
  async function fetchMovieDetails(){
    setIsLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY} &i=${selectedId}`);
    const data = await res.json();
    setIsLoading(false);
    console.log(data);
    setMovie(data);
  }

  fetchMovieDetails();
}
,[selectedId])

useKey('Escape',closingMovieDetails);
return <div className="details">
  {isLoading?<Loader/>:<><header>
    <button className="btn-back" onClick={closingMovieDetails}>
    &larr;
    </button>
    <img src={movie.Poster} alt='poster'/>
    <div className="details-overview">
    
    <h2>{movie.Title}</h2>
    <p>{movie.Released} &bull; {movie.Runtime}</p>
    <p>{movie.Genre}</p>
    <p><span>⭐</span> {movie.imdbRating} imdbRating</p>
    </div>
  </header>
      
    <section>
      <div className="rating">
        {isWatched?
          <p>you already rated this movie {Rated}</p>:
          <>
        <StarRating  MaxRating={10} size = {24} onSetRating ={setUserRating} />
       {userRating&& <button className="btn-add" onClick={handleAdd}>+ Add to list</button>}
        </>
        } 
      </div>
      <p> 
        <em>{movie.Plot}</em>
        <p>Staring{movie.Actors}</p>
        <p>directed by {movie.Director}</p>
      </p>
    </section></>}
  
</div>

  

}
function WatchedSummary({watched}){

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
 
 
 return <div className="summary">
  <h2>Movies you watched</h2>
  <div>
    <p>
      <span>#️⃣</span>
      <span>{watched.length} movies</span>
    </p>
    <p>
      <span>⭐️</span>
      <span>{avgImdbRating.toFixed(2)}</span>
    </p>
    <p>
      <span>🌟</span>
      <span>{avgUserRating}</span>
    </p>
    <p>
      <span>⏳</span>
      <span>{avgRuntime.toFixed(2)} min</span>
    </p>
  </div>
</div>
}
function WatchedmovieList({watched,deleteWatchedMovie}){
  return     <ul className="list">
  {watched.map((movie) => (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button onClick={()=>deleteWatchedMovie(movie.imdbID)} className="btn-delete">❌</button>
      </div>
    </li>
  ))}
</ul>
}