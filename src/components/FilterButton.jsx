import React from 'react'

const FilterButton = ({ active, text, className, onClick }) => {
  if (active) {
    return <button className={className}>{text}</button>
  }

  return (
    <button
        className="btn btn-default"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {text}
    </button>
  )
}

export default FilterButton