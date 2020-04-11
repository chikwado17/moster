import React from 'react';



export const SearchBox = ({placeholder, handleChange}) => (
    <div>
         <input 
            className="search"
            type="search" 
            placeholder={placeholder}
            onChange={handleChange}
          />
    </div>
)