import React from "react";

const Card = () => {
    return (
        <div className="card" style={{ maxWidth: "350px"}}>
            <div className="card__container">
                <div className="card__image"></div>
                <div className="card__title-container">
                    <p className="title">Title</p><span className="subtitle">Subtitle</span>
                </div>
            </div>
            <div className="content">
                <p>Text and other content belong here, inside a <code>content</code> div.</p>
            </div>
            <div className="card__footer">
                <div className="u-text-center"><span>This is additional footer text in <code>card__footer</code>.</span></div>
            </div>
        </div>
    )
}

export default Card;