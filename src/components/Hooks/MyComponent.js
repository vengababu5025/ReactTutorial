import React, { useEffect } from 'react';

function MyComponent() {
  // This logic runs before rendering (like componentWillMount)
  const message = 'Component is about to mount...';

  useEffect(() => {
    // This runs after the component is mounted (similar to componentDidMount)
    console.log('Component has mounted');

    return () => {
      // This runs when the component is unmounted (optional cleanup)
      console.log('Component will unmount');
    };
  }, []); // Empty array ensures this runs only on mount

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default MyComponent;
