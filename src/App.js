import { useEffect, useState } from 'react'
import './App.css'
import Dropdown from './Dropdown'
import SearchBar from './components/SearchBar'

function App() {
  const [isDropdownHidden, setIsDropdownHidden] = useState(0)
  const [inputValue, setInputValue] = useState('')

  // watch for state updates by inputValue ONLY
  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-300 App">
      <SearchBar
        setIsDropdownHidden={setIsDropdownHidden}
        isDropdownHidden={isDropdownHidden}
        setInputValue={setInputValue}
      />
      <Dropdown
        setIsDropdownHidden={setIsDropdownHidden}
        isDropdownHidden={isDropdownHidden}
      />
    </div>
  )
}

export default App
