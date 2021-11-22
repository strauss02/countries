import Arrow from './Arrow'

function SearchBar(props) {
  return (
    <div className="w-full">
      <input
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
