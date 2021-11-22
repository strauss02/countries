import { useEffect, useState } from 'react'
import './App.css'
import Dropdown from './components/Dropdown'
import SearchBar from './components/SearchBar'
import countries from './assets/countries.json'

function App() {
  const countriesCopy = [...countries]

  const [isDropdownHidden, setIsDropdownHidden] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [matchingCountries, setMatchingCountries] = useState(countriesCopy)
  const [searchBarText, setSearchBarText] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  // Case insensitive
  const filterCountriesByInput = (input, countries) => {
    return countries.filter((country) => {
      return country.name.toLowerCase().includes(input.toLowerCase())
    })
  }
  // watch for state updates by inputValue ONLY
  useEffect(() => {
    console.log(searchBarText)
    // TODO: add filtering before display
    setMatchingCountries(filterCountriesByInput(searchBarText, countriesCopy))

    if (isDropdownHidden) {
      setIsDropdownHidden(false)
    }
  }, [searchBarText])

  useEffect(() => {
    //tell searchbox to change its inner text
  }, [selectedCountry])

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-300 App">
      <SearchBar
        setIsDropdownHidden={setIsDropdownHidden}
        isDropdownHidden={isDropdownHidden}
        setInputValue={setInputValue}
        searchBarText={searchBarText}
        selectedCountry={selectedCountry}
        setSearchBarText={setSearchBarText}
      />
      <Dropdown
        setIsDropdownHidden={setIsDropdownHidden}
        isDropdownHidden={isDropdownHidden}
        matchingCountries={matchingCountries}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchBarText={setSearchBarText}
        setSelectedCountry={setSelectedCountry}
      />
    </div>
  )
}

export default App
