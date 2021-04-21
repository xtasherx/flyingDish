import React from "react";
import Header from "../Components/Header.js";
import Card from "../Components/Card.js"

 const Saved = () => {
    return(
        <>
        
         <div className="hero bg-green-600">
            <Header/>
            <div className="spacer-60"></div>    
        </div>
        <div className="m-5">
            <h1>Favorites</h1>
            <Card/>
        </div>
        </>

    )

}

export default Saved;