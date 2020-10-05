import React from "react";

const FilterName = ({ filter, handlerFilter }) => {
  return (
    <label>
      filter shown with:
      <input
        type="text"
        value={filter}
        onChange={handlerFilter}
        placeholder="filter"
      />
    </label>
  );
};

export default FilterName;
