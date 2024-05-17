import { useEffect, useState } from "react"
import { useDebouceHook } from "./debouceHook"
import { fetchUsers } from "../utils/debounceUtil"

interface User {
  id: number
  name: string
}

interface SearchBarProps {
  onChange: (value: string) => void
}

function SearchBar({ onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search users"
    />
  )
}

const UseDebounce = () => {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState<string>("")
  const [users, setUsers] = useState<User[]>([])
  const debouncedSearch = useDebouceHook(search)

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true)
      const users = await fetchUsers(debouncedSearch)
      setUsers(users)
      setLoading(false)
    }
    loadUsers()
  }, [debouncedSearch])

  return (
    <div>
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>
        })}
    </div>
  )
}

export default UseDebounce
