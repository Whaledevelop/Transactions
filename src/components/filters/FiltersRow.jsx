import React from 'react';

import FilterButton from './FilterButton'

const FiltersRow = ({ size, fetched, filters, onSwitchMode }) => (
  <div className={size}>
    {fetched ? (
      <div className="btn-group btn-group-justified">
        {filters.map(filter=> (
          <FilterButton
            key={filter.id}
            className={filter.className}
            name={filter.name}
            onClick={onSwitchMode}
          /> 
        ))}
      </div>
    ) : <div></div>}
  </div>
)
 
export default FiltersRow;