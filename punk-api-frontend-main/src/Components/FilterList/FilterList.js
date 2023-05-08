import React from "react";
import FilterItems from "../FilterItems/FilterItems";
import "./FilterList.scss";

const FiltersList = (props) => {
  const { handleChecked, filters } = props;
  const getFilterJsx = (filter, index) => (
    <div key={index}>
      <FilterItems filter={filter} handleChecked={handleChecked} />
    </div>
  );

  return (
    <div className="filters__section">
      <h4>Filters:</h4>
      {filters.map(getFilterJsx)}
    </div>
  );
};

export default FiltersList;
