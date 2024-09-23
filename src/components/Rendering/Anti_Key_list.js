import React from 'react'
import {v4 as uuidv4} from 'uuid'

function Anti_Key_list() {
    const items = [
        { id: uuidv4(), name: 'Apple' },
        { id: uuidv4(), name: 'Banana' },
        { id: uuidv4(), name: 'Cherry' },
      ];
  return (
    <div>
        <ul>
    {items.map(item => (
      <li key={item.id}>{item.id}======={item.name}</li>
    ))}
  </ul>
    </div>
  )
}

export default Anti_Key_list