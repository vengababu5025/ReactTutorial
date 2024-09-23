import React,{useState} from 'react'

function Object() {
const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <form>
            <input type='text' 
            value={name.firstName} 
            onChange={e=>
            {
                e.preventDefault()
                setName( 
                    {...name,firstName:e.target.value}
                )
            }
                
                }></input>


            <input type='text' 
            value={name.lastName} 
            onChange={e=>{
                e.preventDefault()
                setName({...name,lastName:e.target.value})
            }}></input>

            <h2>your firstname--{name.firstName}</h2>
            <h2>your Last Name--{name.lastName}</h2>

            <h3>{JSON.stringify(name)}</h3>
        </form>

    </div>
  )
}

export default Object