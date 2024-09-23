import React, { useState, useEffect } from 'react';

function FetchDataExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/books');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the async function

  }, []); // Empty dependency array means the effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show an error message if the fetch fails
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      <table border={1}>
       <thead>
       <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Authour</th>
        </tr>
       </thead>
        <tbody>
        {
          data.map((item)=>(
            item.id%2==1?(
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
            ):null
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default FetchDataExample;
