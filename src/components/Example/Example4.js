import React,{useState} from 'react'
import Onimg from '../../Assets/pic_bulbon.gif'
import Offimg from '../../Assets/pic_bulboff.gif'

function Example4() {
    const[checkon,setCheckon]=useState(false)
    const[checkoff,setCheckoff]=useState(true)

    const handlechange=(e)=>{
        setCheckon(e.target.checked)
        setCheckoff(false)
    }
    const handlechange1=(e)=>{
       setCheckoff(e.target.checked)
       setCheckon(false)
    }
  return (
    <div>
        {checkon?<img src={Onimg}/>:<img src={Offimg}/>}
        <label>On:</label>
        <input type='radio' id='rad' checked={checkon} onChange={handlechange}/>
        <lable>Off:</lable>
        <input type='radio' id='rad' checked={checkoff} onChange={handlechange1}/>
    </div>
  )
}

export default Example4
