
import React from 'react';
import NewSchoolPenComponent from './NewSchoolPenComponent';


function SchoolPenList({ schoolpenTypes }) {
  return (
    <div className="schoolpen-types">
      <div className="schoolpen-column">
        {schoolpenTypes.map((schoolpen) => (
          <NewSchoolPenComponent key={schoolpen.id} schoolpen={schoolpen} />
        ))}
      </div>
    </div>
  );
}

export default SchoolPenList;