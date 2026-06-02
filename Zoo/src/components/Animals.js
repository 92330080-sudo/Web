import React, { useState } from 'react';

function Animals() {
  const [showBirds, setShowBirds] = useState(true);

  const seeMore = () => {
    alert("Go to Google for more information!");
  };

  const animals = {
    birds: [
      { name: 'Eagle', ability: 'Can Fly', img: '/pictures/bird1.jpg' },
      { name: 'Parrot', ability: 'Can Fly', img: '/pictures/bird2.jpg' },
      { name: 'Owl', ability: 'Can Fly', img: '/pictures/bird3.jpg' },
      { name: 'Chicken', ability: 'Cannot Fly', img: '/pictures/chicken.jpg' }
    ],
    mammals: [
      { name: 'Elephant', ability: 'Number of Legs: 4', img: '/pictures/elephant.jpg' },
      { name: 'Dolphin', ability: 'Number of Legs: 0', img: '/pictures/dolphin.jpg' },
      { name: 'Kangourou', ability: 'Number of Legs: 2', img: '/pictures/kangourou.jpg' },
      { name: 'Tiger', ability: 'Number of Legs: 4', img: '/pictures/tiger.jpg' }
    ]
  };

  return (
    <div>
      <h1>Animals Section 🐾</h1>
      
      <button onClick={() => setShowBirds(true)}>Birds</button>
      <button onClick={() => setShowBirds(false)}>Mammals</button>
      
      <div className="section">
        {(showBirds ? animals.birds : animals.mammals).map((animal, index) => (
          <div key={index} className="card">
            <img src={animal.img} alt={animal.name} />
            <h3>{animal.name}</h3>
            <p>{animal.ability}</p>
            <button onClick={seeMore}>See More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animals;
