import React, { useState } from 'react';
import NewSchoolPenComponent from './NewSchoolPenComponent';

function SchoolPenTypes() {
  const initialVisibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);

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
    {
      id: 4,
      name: 'Smart Language Translator Pen',
      description: 'The Smart Language Translator Pen is a revolutionary tool for language learners. It instantly translates written text into multiple languages, helping students understand and communicate in foreign languages with ease. Compact and user-friendly, its perfect for language classes and international studies.',
      image: '/SmartLanguageTranslatorPen.jpg',
    },
    {
      id: 5,
      name: 'Mathematical Equation Solver Pen',
      description: 'The Mathematical Equation Solver Pen is a must-have for math enthusiasts. It scans handwritten mathematical equations and provides step-by-step solutions, making complex problem-solving a breeze. Whether youre a student or a professional, this pen enhances mathematical understanding and problem-solving skills.',
      image: '/MathematicalEquationSolverPen.jpg',
    },
    {
      id: 6,
      name: 'Interactive History Timeline Pen',
      description: 'The Interactive History Timeline Pen is an educational tool that brings history to life. Students can use it to scan historical texts or timelines, and it provides interactive multimedia content related to specific events. Enhance your history lessons with this engaging pen that turns learning into a captivating experience.',
      image: '/InteractiveHistoryTimelinePen.jpg',
    }
    
  ];

  const handleViewMoreClick = () => {
    if (isExpanded) {
      // Якщо видимі елементи розгорнуті, приховати їх
      setVisibleCount(initialVisibleCount);
    } else {
      // Якщо видимі елементи згорнуті, відобразити їх у повному обсязі
      setVisibleCount(schoolpenTypes.length);
    }

    // Змінити стан isExpanded на протилежний
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="schoolpen-types">
      <div className="schoolpen-column">
        {schoolpenTypes.slice(0, visibleCount).map((schoolpen) => (
          <NewSchoolPenComponent key={schoolpen.id} schoolpen={schoolpen} />
        ))}
      </div>
      {schoolpenTypes.length > initialVisibleCount && (
        <div className="view-more-container">
          <button className="view-more" onClick={handleViewMoreClick}>
            {isExpanded ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default SchoolPenTypes;