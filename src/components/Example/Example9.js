import React, { useState } from 'react'

function Example9() {
    const[input,setInput]=useState('')
    const[todo,setTodo]=useState([])

    const handleAdd=(e)=>{
        e.preventDefault();
        
        setTodo([...todo,
            input
        ])
    }
    const handleEdit=()=>{
        
    }
   
  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <form onSubmit={handleAdd} style={styles.form}>
        <input style={styles.input} type='text' value={input} onChange={e=>setInput(e.target.value) }></input>
        <button type='submit' style={styles.button}>ADD</button>
        </form>
      </div>
      
      <div style={styles.listContainer}>
        <ul>
            {
                todo.map((item,index)=>(
                    <li key={index}>
                        <input type='text'disabled value={item} onChange={e=>e.target.value}/>
                        <button onClick={handleEdit}>Edit</button>
                    </li>
                ))
            }
        </ul>
        
      </div>
    </div>
  )
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

export default Example9