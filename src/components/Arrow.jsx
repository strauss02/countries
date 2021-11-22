function Arrow(props) {
  return (
    <p
      onClick={() => props.setIsDropdownHidden(!props.isDropdownHidden)}
      className="cursor-pointer inline-block -ml-6 text-xs text-gray-700"
    >
      {' '}
      ▼
    </p>
  )
}

export default Arrow
