import React,{ useState, useEffect } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0)
        useEffect(() => {
            console.log("UseEffect is Running")
    
        },[count])
  return (
    <>
    <h1>Count : {count}</h1>
<button onClick={() => setCount(count + 1)}>Inc</button>
    </>
  )
}

export default Counter