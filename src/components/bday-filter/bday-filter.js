import "./bday-filter.css";

const filterButtons = [
  { name: 'byName ', label: 'by name' },
  { name: 'byAge', label: 'by age' },
];
  
  const BdayFilter = ({filter, onFilterChange = () => {}}) => {
  
    const buttons = filterButtons.map(({name, label}) => {
      const isActive = name === filter;
      const classNames = 'btn ' + (isActive ? 'btn-name' : 'btn-age');
  
      return (
        <button key={name}
                type="button"
                onClick={() => onFilterChange(name)}
                className={classNames}>{label}</button>
      );
    });
  
    return (
      <div className = 'btn-group'>
        { buttons }
      </div>
    );
  };

export default BdayFilter; 
