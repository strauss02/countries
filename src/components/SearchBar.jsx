import react from "react";
import Arrow from "./Arrow";

function SearchBar() {
  return (
    <div>
      <input type="text" className="border-2 rounded-lg p-2 border-gray-600"/>
      <Arrow/>
    </div>
  )
}

export default SearchBar