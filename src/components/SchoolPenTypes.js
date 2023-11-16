import React from 'react';

function SchoolPen() {
  const schoolpenTypes = [
    {
      id: 1,
      name: 'Digital Sketch Pen',
      description: 'The Digital Sketch Pen is a versatile tool for digital creativity. It allows students to draw, write, and illustrate on tablets and interactive whiteboards. With an ergonomic design and pressure-sensitive technology, its perfect for art, note-taking, and collaborative learning.',
      image: '/DigitalSketchPen.jpg',
    },
    {
      id: 2,
      name: 'Eco-Friendly Fountain Pen',
      description: 'The Eco-Friendly Fountain Pen is a sustainable writing tool made from recycled materials. It reduces plastic waste with refillable ink cartridges, providing a smooth writing experience for essays and assignments, while also promoting eco-consciousness.',
      image: '/Eco-FriendlyFountainPen.png',
    },
    {
      id: 3,
      name: 'Scientific Data Recorder',
      description: 'The Scientific Data Recorder is a high-tech pen for science students. It records and analyzes experiment data in real time, simplifying research and enhancing data accuracy. Its ideal for students in biology, chemistry, physics, and environmental science.',
      image: '/ScientificDataRecorder.jpg',
    },
  ];

  return (
    <div className="schoolpen-types">
      <div className="schoolpen-column">
        {schoolpenTypes.map((schoolpen) => (
          <div key={schoolpen.id} className="schoolpen">
            <img src={schoolpen.image} alt={schoolpen.name} />
            <h3>{schoolpen.name}</h3>
            <p>{schoolpen.description}</p>
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <button className="view-more">View More</button>
      </div>
    </div>
  );
}

export default SchoolPen;