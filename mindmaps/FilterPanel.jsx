import React from 'react'
import Filter from '../containers/Filter'

const FilterPanel = () => (
    <div className="btn-group btn-group-justified">
          <Filter filter="income" text="Income" className="btn btn-success"/>
          <Filter filter="consumption" text="Consumption" className="btn btn-warning"/>
          <Filter filter="lastMonth" text="Last month" className="btn btn-info"/>
          <Filter filter="moreThan1000" text="More than 1000 rubles" className="btn btn-primary"/>
    </div>
)

export default FilterPanel