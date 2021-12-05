import React from "react";
import "./bday-filter.css";

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'soon', label: 'Will be soon' }
];

const BdayFilter = ({filter, onFilterChange = () => {}}) => {

  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === filter;
    const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <button key={name}
              type="button"
              onClick={() => onFilterChange(name)}
              className={classNames}>{label}</button>
    );
  });

  return (
    <div className="btn-group">
      { buttons }
    </div>
  );
};

export default BdayFilter;