import React from 'react'
import Filters from '../containers/Filters'

const Header = () => (
    <div className="btn-group btn-group-justified">
          <Filters filter="income" text="Income" className="btn btn-success"/>
          <Filters filter="consumption" text="Consumption" className="btn btn-warning"/>
          <Filters filter="lastMonth" text="Last month" className="btn btn-info"/>
          <Filters filter="moreThan1000" text="More than 1000 rubles" className="btn btn-primary"/>
    </div>
)

export default Header