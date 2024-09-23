import React from 'react'

function List_Keys() {
    const students=[{
        id:1,
        name:'vengababu',
        Skill:'UI'
    },
    {
        id:2,
        name:'vinay',
        Skill:'.Net'
    },
    {
        id:3,
        name:'Vinod',
        Skill:'UI'
    },
    {
        id:4,
        name:'Ganesh',
        Skill:'Java'
    }]
  return (
    <div>
        <table border={3}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Skill</td>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student)=>(
                        student.id%2==0?(
                            <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.Skill}</td>
                        </tr>
                        ):null
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default List_Keys