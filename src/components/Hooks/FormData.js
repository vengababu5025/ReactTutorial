import React,{useEffect,useState} from 'react'

function FormData() {
    const[name,setName]=useState('')
    const[age,setAge]=useState("")
    const[Data,setData]=useState(["",0])
    useEffect(
        ()=>{
            setData(
                [name,age]
            )
        },[name,age]
    )
   const handleSubmit=(e)=>{
    e.preventDefault()
        console.log('form sumited',Data[1])
   }
  return (
    <div>
        <h1>Form Example</h1>

        <form>
            <label>Name:  </label>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input><br></br>
            <label>Age:  </label>
            <input type='text' value={age} onChange={e=>setAge(e.target.value)}></input><br></br>

            <button onClick={handleSubmit}>Submit</button>
        </form>

    </div>
  )
}

export default FormData