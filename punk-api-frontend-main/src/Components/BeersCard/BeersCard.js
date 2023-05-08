import React from "react";
import "./BeersCard.scss";

const BeersCard = (props) => {
  const shortenDescription = (description) => {
    return description.length < 190
      ? description
      : description.substring(0, description.lastIndexOf(".", 190)) + ".";
  };

  const { beer } = props;
  const { name, description, abv, image_url } = beer;
  return (
    <div className="beers__card">
      <img src={image_url} className="beers__card__img" alt="" />
      <h3 className="beers__card__title">{name}</h3>
      <h3 className="beers__card__span">ABV {abv}%</h3>
      <p>{shortenDescription(description)}</p>
    </div>
  );
};

export default BeersCard;
