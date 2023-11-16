
import React from 'react';

function NewSchoolPenComponent({ camera }) {
  return (
    <div className="schoolpen">
      <img src={schoolpen.image} alt={schoolpen.name} />
      <h3>{schoolpen.name}</h3>
      <p>{schoolpen.description}</p>
    </div>
  );
}

export default NewSchoolPenComponent;