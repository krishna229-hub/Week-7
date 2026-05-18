import { NavLink } from "react-router"

function Technologies() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="Java">Java</NavLink>
        </li>
        <li>
          <NavLink to="Nodejs">Nodejs</NavLink>
        </li>
        <li>
          <NavLink to="Vue">Vue</NavLink>
        </li>
      </ul>
      
    </div>
  )
}

export default Technologies