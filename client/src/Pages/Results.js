
import {useParams} from 'react-router';
import React, { useState, useEffect} from 'react';
import Header from "../Components/Header.js";
import Card from "../Components/Card.js"
import axios from "axios";



 const Results = () => {
    const {id} = useParams();
    const [searchResults,setSearchResults] = useState([]);
   
    


   useEffect(() => {
    // api call to spoonacular 
    console.log(id);
    const responseURL = `https://api.spoonacular.com/recipes/complexSearch/?query=${id}&sort=random&instructionsRequired=true&maxReadyTime=20&addRecipeInformation=true&fillIngredients=true&max-used-ingredients=10&number=6&apiKey=4f924dd683af4b90b667d59fcf07d711`;
    axios.get(responseURL)
       .then( res => {
          setSearchResults(res.data.results);
          console.log(searchResults);
          // window.location.pathname = "results";
       }
       )
},[])

    return(
        <>
        

         <div className="hero bg-green-600">
            <Header/>
            <div className="spacer-60"></div>    
        </div>
        <div className="m-5 u-flex u-center">
            
            <Card data={searchResults}/>
      
        </div>
        </>

    )

}



export default Results;