
import React, { useState, useEffect} from 'react';

import Header from "../Components/Header";
 const Landing = () => {

   const [userSearch,setUserSearch] = useState("");
  

   
   const handleChange = e => {
      setUserSearch(e.target.value);
      console.log(userSearch);
}

   const handleClick = () => {
        window.location.pathname = `results/${userSearch}`
}

     return (
      <div id="splash-img" className="hero fullscreen hero-img parallax-img">
      <div className="hero-body p-0">
      <Header />
          <div className="content u-text-center u-flex u-flex-column">
              <h1 className=" text-red-600 headline-4 title ">We heard you're busy.</h1>
              <h4 className=" text-light sub-title">So we created an easy way to find recipes that you can whip up in 30 minutes or less. Search for an ingredient, a dish or even a cocktail. We've got you covered.</h4>
              <div class="form-group">
                  <input type="search" class="form-group-input searchbox" placeholder="pasta" onChange={handleChange} />
                  <button class="form-group-btn btn-small search-btn bg-green-600 text-light" onClick={handleClick}>Search</button>
              </div>
          </div>

      </div>
  </div>
     )

}

export default Landing;