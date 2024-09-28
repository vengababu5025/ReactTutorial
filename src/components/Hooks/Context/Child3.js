
import React, { useContext } from 'react';
import { UserContext } from './Context';

function Child3() {
  // Destructure both user value and setUser function from context
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Child3:{user}</h2>
      <button type="button" onClick={() => setUser('venga')}>Change3</button>
    </div>
  );
}

export default Child3;
