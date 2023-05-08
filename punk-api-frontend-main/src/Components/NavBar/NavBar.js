import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

const NavBar = (props) => {
  const { filters, handleInput, handleChecked } = props;
  return (
    <>
      <SearchBox handleInput={handleInput} />
      <FilterList filters={filters} handleChecked={handleChecked} />
    </>
  );
};

export default NavBar;
