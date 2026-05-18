import Register from './Register'
import Login from "./Login";
import Technologies from "./Technologies";
import Home from "./Home";
import { NavLink } from 'react-router';
function Header() {
  return (
    <div className='Flex justify-between  items-center px-10'>
        <img
        width="80px" 
        src="https://thumbs.dreamstime.com/b/globe-logo-19190901.jpg" alt="" />

        <nav>
            <ul className='flex gap-10 '>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                 <li>
                    <NavLink to="Register">Register</NavLink>
                </li>
                 <li>
                    <NavLink to="Login">Login</NavLink>
                </li>
                 <li>
                    <NavLink to="Technologies">Technologies</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header