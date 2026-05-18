import React from 'react'

const Listren = () => {
    const students = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ]
  return (
    <>
      <h1>List of students in the Array</h1>
      {students.map((student) => {
        return <h1 key={student.id}>{student.id}-{student.name}</h1>
      })}

    </>
  )
}

export default Listren