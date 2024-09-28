import React, { createContext, useState } from 'react';
import Child1 from './Child1';

// Creating the context
export const UserContext = createContext();

function Context() {
  // State to manage the context value
  const [user, setUser] = useState("vengababu");

  return (
    <div>
      {/* Providing the context value and update function */}
      <UserContext.Provider value={{ user, setUser }}>
        <h1>main context: {user}</h1>
        <button onClick={()=>setUser("vengababu")}>reset</button>
        <Child1 />
      </UserContext.Provider>
    </div>
  );
}

export default Context;
