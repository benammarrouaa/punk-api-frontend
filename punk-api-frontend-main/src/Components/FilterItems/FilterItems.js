import React, { useState } from "react";
import "./FilterItems.scss";

const FiltersList = (props) => {
  const { filter, handleChecked } = props;
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    handleChecked(filter, !isChecked);
    setIsChecked(!isChecked);
  };
  const { label, value } = filter;
  return (
    <div className="filtersList">
      <div className="filtersList__filter">
        <input type="checkbox" value={value} onClick={toggleCheckbox} />
        <label htmlFor="abv">{label}</label>
      </div>
    </div>
  );
};

export default FiltersList;
