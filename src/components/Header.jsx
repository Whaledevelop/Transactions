import React from 'react'
import Filters from '../containers/Filters'

const Header = () => (
    <div className="btn-group btn-group-justified">
          <Filters filter="SHOW_INCOME" text="Income" className="btn btn-success"/>
          <Filters filter="SHOW_CONSUMPTION" text="Consumption" className="btn btn-warning"/>
          <Filters filter="SHOW_LAST_MONTH" text="Last month" className="btn btn-info"/>
          <Filters filter="SHOW_MORE_THAN_1000" text="More than 1000 rubles" className="btn btn-primary"/>
    </div>
)

export default Header