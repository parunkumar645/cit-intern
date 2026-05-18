import React, { useState } from 'react'

const Maths = () => {
    const [count , setCount] = useState(0)
    const inc = () => {
        setCount(count + 1)
    }
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={inc}>Inc</button>

    </>
  )
}

export default Maths