import { useEffect, useRef } from 'react'
import Arrow from './Arrow'

function SearchBar(props) {
  useEffect(() => {
    console.log('effex')
  })
  const inputEl = useRef(null)

  return (
    <div className="w-full">
      <input
        ref={inputEl}
        onChange={() => {
          props.setInputValue(inputEl.current.value)
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
