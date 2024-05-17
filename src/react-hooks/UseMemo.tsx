import { useState, useMemo } from "react"

interface Item {
  id: number
  isSelected: boolean | number
}

type InitialItemProps = Item[]

type SelectedItemProps = {
  id: number
 }

const initialItems: InitialItemProps = new Array(29_999_999).fill(0).map((_, i) => ({
  id: i,
  isSelected: i === 29_999_998,
}))

const UseMemo = () => {
  const [items] = useState(initialItems)
  const [count, setCount] = useState<number>(0)
  const selectedItem: SelectedItemProps | undefined = useMemo(() => {
    return items?.find((item) => item.id === count)
  }, [items, count]) 
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected item: {selectedItem?.id}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default UseMemo