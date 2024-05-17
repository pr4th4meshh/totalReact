import { useState } from "react"

const UseState = () => {
    //? useState is a Hook that lets you add React state to function components. 
    const [count, setCount] = useState(0)
    const handleMinus = () => {
        setCount((prev) => prev - 1)
    }
    const handlePlus = () => {
        setCount((prev) => prev + 1)
    }
  return (
    <div>
        <button onClick={handleMinus} disabled={count === 0}>-</button>
        <span style={{padding: "0 10px"}}>{count}</span>
        <button onClick={handlePlus}>+</button>
    </div>
  )
}

export default UseState