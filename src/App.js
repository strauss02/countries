import { useState } from 'react'
import './App.css'
import Dropdown from './Dropdown'
import SearchBar from './components/SearchBar'

function App() {
  const [isDropdownHidden, setIsDropdownHidden] = useState(0)
  console.log(isDropdownHidden)
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-300 App">
      <SearchBar
        setIsDropdownHidden={setIsDropdownHidden}
        isDropdownHidden={isDropdownHidden}
      />
      <Dropdown
        setIsDropdownHidden={setIsDropdownHidden}
        isDropdownHidden={isDropdownHidden}
      />
    </div>
  )
}

export default App
