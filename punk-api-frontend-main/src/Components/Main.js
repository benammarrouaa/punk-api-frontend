import React from "react";
import BeersList from "./BeersList/BeersList.js";

const Main = (props) => {
  const { beers, loading, searchTerm, filters } = props;
  return (
    <>
      <BeersList
        beers={beers}
        loading={loading}
        searchTerm={searchTerm}
        filters={filters}
      />
    </>
  );
};

export default Main;
