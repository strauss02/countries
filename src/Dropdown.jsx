import { useRef } from 'react'

function Dropdown(props) {
  const dropdown = useRef(null)
  if (props.isDropdownHidden) {
    console.log('hide dropdown')
    dropdown.current.hidden = true
  } else {
    dropdown.current.hidden = false
  }
  return (
    <ul className=" bg-white w-1/5  -mr-4 rounded-xl" ref={dropdown}>
      <li>Volvo</li>
      <li>Saab</li>
      <li>Mercedes</li>
      <li>Audi</li>
    </ul>
  )
}

export default Dropdown
