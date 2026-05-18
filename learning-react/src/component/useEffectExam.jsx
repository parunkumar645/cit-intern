import React, { useState, useEffect } from 'react'

const useEffectExam = () => {
    const [count , setCount] = useState(0)
    useEffect(() => {
        console.log("UseEffect is Running")

    },[])
  return (
    <>
    <h1>Count : {count}</h1>
<button onClick={() => setCount(count + 1)}>Inc</button>
    </>
  )
}

export default useEffectExam