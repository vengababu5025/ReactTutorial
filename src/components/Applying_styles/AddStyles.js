import React from 'react'
import './Styles.css'
import Style from './Style.module.css'
import styled from 'styled-components';


function AddStyles() {
    const buttonStyle = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
      };
      const Button = styled.button`
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: lightgreen;
  }
`;
  return (
    <div>
        <button className="button">click me</button><br></br>
        <button style={buttonStyle}>click me</button>

        <button className={Style.button}>Click me</button>

        <Button>click me</Button>
    </div>

  )
}

export default AddStyles
