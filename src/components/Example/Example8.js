import React, { useState } from 'react';

function Example8() {
  const [todo, setTodo] = useState([]);
  const [todo1, setTodo1] = useState([]);
  const [input, setInput] = useState('');

 
  const handleAdd = () => {
    setTodo([
      ...todo,
      {
        message: `Item - ${todo.length + 1}`,
      },
    ])
  };

  
  const handleDelete = (index) => {
    setTodo([...todo.slice(0, index), ...todo.slice(index + 1)]);
  };


  const handleInput = (e) => {
    e.preventDefault();
    if (input.trim()) { 
      setTodo1([...todo1, input]);
      setInput(''); 
    }
  };


  const handleDelete2 = (index) => {
    setTodo1([...todo1.slice(0, index), ...todo1.slice(index + 1)]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button onClick={handleAdd} style={styles.button}>Add Item</button>
        <form onSubmit={handleInput} style={styles.form}>
          <input 
            type='text' 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder='Enter item'
            style={styles.input}
          />
          <button type='submit' style={styles.button}>Add Input</button>
        </form>
      </div>
      
      <div style={styles.listContainer}>
        <ul style={styles.list}>
          {todo.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item.message}
              <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <ul style={styles.list}>
          {todo1.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
              <button onClick={() => handleDelete2(index)} style={styles.deleteButton}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px', 
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', 
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', 
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px', 
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '200px',
    textAlign: 'left',
  },
  listItem: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '5px 10px',
  },
};

export default Example8;
