import { useEffect, useRef, useState } from 'react'
import Arrow from './Arrow'

function SearchBar(props) {
  // const [text, setText] = useState('')
  const inputEl = useRef(null)

  const updateInputText = () => {
    console.log(inputEl.current.value)
    inputEl.current.value = props.inputValue
  }

  useEffect(() => {
    console.log('effex')
    inputEl.current.value = props.searchBarText
  })

  return (
    <div className="w-full">
      <input
        ref={inputEl}
        onChange={() => {
          // setText(inputEl.current.value)
          props.setSearchBarText(inputEl.current.value)
        }}
        type="text"
        className="w-1/5 border-2 rounded-lg p-2 border-gray-600"
      />
      <Arrow
        setIsDropdownHidden={props.setIsDropdownHidden}
        isDropdownHidden={props.isDropdownHidden}
      />
    </div>
  )
}

export default SearchBar
