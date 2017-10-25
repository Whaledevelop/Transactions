import React from 'react';


const Filter = ({ filter, text, className}) => { console.log(filter); return (
      <Link to={filter}>
            <a className={className}>
                {text}
            </a>
      </Link>
)}

export default Filter