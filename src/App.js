import { useEffect, useState } from 'react'
import './App.css'
import Dropdown from './Dropdown'
import SearchBar from './components/SearchBar'
import countries from './assets/countries.json'

function App() {
  const countriesCopy = [...countries]

  const [isDropdownHidden, setIsDropdownHidden] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [matchingCountries, setMatchingCountries] = useState(countriesCopy)

  const filterCountriesByInput = (input, countries) => {
    return countries.filter((country) => {
      return country.name.includes(input)
    })
  }
  // watch for state updates by inputValue ONLY
  useEffect(() => {
    console.log(inputValue)
    // TODO: add filtering before display
    setMatchingCountries(filterCountriesByInput(inputValue, countriesCopy))

    if (isDropdownHidden) {
      setIsDropdownHidden(false)
    }
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
        matchingCountries={matchingCountries}
      />
    </div>
  )
}

export default App
