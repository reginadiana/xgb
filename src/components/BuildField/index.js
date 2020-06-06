import React from 'react'

import './style.css'

export const BuildField = ({
  title,
  value,
  handleChange,
  name,
  placeholder
}) => {
  const handleInputChange = e => {
    handleChange(e.target.name, e.target.value);
  };

		return(
			<>
				<h3>{title}</h3>
        <input type="text" name={name} value={value} onChange={handleInputChange} placeholder={placeholder}/>
			</>
		);
}