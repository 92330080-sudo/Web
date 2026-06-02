import React, { useState } from 'react';

function Test() {
  const [clicked, setClicked] = useState(null);

  return (
    <div>
      <button style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', borderRadius: '5px', marginRight: '10px' }} onClick={() => setClicked('click1')}>click1</button>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', borderRadius: '5px' }} onClick={() => setClicked('click2')}>click2</button>

      {clicked === 'click1' && <p>hello doctor</p>}
      {clicked === 'click2' && <p>click</p>}
      <p>hello guys</p>
    </div>
  );
}

export default Test;