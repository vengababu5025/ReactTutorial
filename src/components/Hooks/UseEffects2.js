import { useEffect, useState } from 'react';

function UseEffects2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log("updating log");
    document.title = `You clicked ${count} times`;
  }, [count]); // Effect runs only when `count` changes
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count-{count} times</button>
    </div>
  );
}

export default UseEffects2;
