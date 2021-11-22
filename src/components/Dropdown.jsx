import { useEffect, useRef } from 'react'

function Dropdown(props) {
  const dropdown = useRef(null)

  useEffect(() => {
    if (props.isDropdownHidden) {
      console.log('hide dropdown')
      dropdown.current.hidden = true
    } else {
      dropdown.current.hidden = false
    }
  })

  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setInputValue(e.target.innerText)
    props.setSelectedCountry(e.target.innerText)
    props.setSearchBarText(e.target.innerText)
  }

  return (
    <ul
      className=" bg-white w-1/5  h-40 overflow-scroll -mr-4 rounded-xl"
      ref={dropdown}
    >
      {props.matchingCountries.map((country) => {
        return (
          <li onClick={handleClick} key={country.name}>
            {' '}
            {country.name}{' '}
          </li>
        )
      })}
    </ul>
  )
}

export default Dropdown
