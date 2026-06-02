import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [infoVisible, setInfoVisible] = useState(false);

  const userName = 'roeya';
  const userId = '92330080';

  const showInfo = () => {
    setInfoVisible(true);
    alert(`Name: ${userName} ID: ${userId}`);
  };

  return (
    <div>
      <h1>Welcome to Happy Zoo 🐾</h1>
      
      <div className="home">
        <img src="/pictures/zoo.jpg" className="homeImg" alt="Zoo" />
        
        <div className="homeBtns">
          <button onClick={() => navigate('/animals')}>View Animals</button>
          <button className="infoBtn" onClick={showInfo}>Display Your Name and ID</button>
          <button onClick={() => navigate('/employees')}>View Employees</button>
        </div>
        {infoVisible && (
          <div className="infoText">
            Name: {userName} | ID: {userId}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
