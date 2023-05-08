import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  // Predetermined filters that will be checked on/off for filtering the data
  const [filters, setFilters] = useState([
    { value: "abv", label: "High ABV (> 6.0%)", isChecked: false },
    { value: "classic", label: "Classic Range", isChecked: false },
    { value: "acidic", label: "Acidic (< 4)", isChecked: false },
  ]);

  // Upon searchbox changing its criteria, set Search term to value input by user
  const handleInput = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);
  };
  // Upon filter changing being applied/not, set the filters being applied
  const handleChecked = (filter, isChecked) => {
    const filtersCopy = Object.assign([], filters);
    const index = filters.findIndex((f) => f.value === filter.value);
    filtersCopy[index].isChecked = isChecked;
    setFilters(filtersCopy);
  };

  // Fetch the beers from PUNK API
  const GetBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?per_page=80")
      // Put response into response.json file
      .then((response) => response.json())
      // Add beers received in API fetch to beers object array of setBeers
      .then((data) => {
        setBeers(data), setLoading(false);
      })
      // Catch errors
      .catch((error) => console.log(error));
  };

  // On page load, fetch the beers
  useEffect(() => {
    GetBeers();
  }, []);

  return (
    <div>
      <Header data-testid="header" />
      <NavBar
        filters={filters}
        handleInput={handleInput}
        handleChecked={handleChecked}
      />
      <Main
        beers={beers}
        searchTerm={searchTerm}
        loading={loading}
        filters={filters}
      />
    </div>
  );
}

export default App;
