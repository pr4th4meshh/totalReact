import { useEffect, useRef } from "react"

function UseRefHook() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const changePlaceholder = () => {
    if (inputRef.current) {
      inputRef.current.placeholder = "Changed placeholder"
    }
  }
  useEffect(() => {
    inputRef.current?.focus() //? This autofocuses on input once the component is mounted
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={changePlaceholder}>Change placeholder</button>
    </div>
  )
}

export default UseRefHook
