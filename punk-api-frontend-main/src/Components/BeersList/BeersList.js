import React from "react";
import "./BeersList.scss";
import BeersCard from "../BeersCard/BeersCard";

const BeersList = (props) => {
  const { beers, loading, searchTerm, filters } = props;
  const displayMsg = () => {
    return loading ? (
      <span className="loader" />
    ) : (
      <span className="displayMsg">Sorry, no results found...</span>
    );
  };
  const checked = filters
    .filter((condition) => condition.isChecked)
    .map((condition) => condition.value);

  const results = beers
    // Filter beers by if it includes the searchTerm from searchbox
    .filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // Filter beers by filter (if checked) of over 6% ABV
    .filter((beer) => (checked.includes("abv") ? beer.abv > 6 : beer))
    // Filter beers by filter (if checked) of if the beer is a classic
    .filter((beer) =>
      checked.includes("classic") ? beer.first_brewed.slice(-4) < 2010 : beer
    )
    // Filter beers by filter (if checked) of under 4PH
    .filter((beer) => (checked.includes("acidic") ? beer.ph < 4 : beer))
    // Map all beers that pass these criteria
    .map((beer) => <BeersCard key={beer.id} beer={beer} />);
  return results.length > 0 ? (
    <div className="beerList">{results}</div>
  ) : (
    displayMsg()
  );
};

export default BeersList;
