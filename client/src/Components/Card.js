import React from "react";

const Card = (props) => {
    console.log(props.data);
    return (
        <div className="u-center u-flex u-flex-row" style={{ flexWrap: "wrap"}}>
                    {props.data.map(recipe =>
                        
        <div className="card m-2" style={{ maxWidth: "350px", minWidth: "300px"}}>
            <div className="card__container">
                <div className="card__image"><img src={recipe.image}></img></div>
            </div>

            <div className="card__footer">
                <div className="u-text-center">
                <p className="title">{recipe.title}</p>
                <p className="subtitle">Ready In {recipe.readyInMinutes} minutes</p>
                </div>
            </div>
        </div>

            )}
        </div>


    )
}

Card.defaultProps = {
    catName: "Sandy",
    eyeColor: "deepblue",
    age: "120"    
}
export default Card;