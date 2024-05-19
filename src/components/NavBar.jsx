import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [isRotated, setIsRotated] = useState(false);

    const toggleRotation = () => {
        setIsRotated(!isRotated);
    };
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src="/src/images/slice.png" alt="pizza" style={{ width: '90px', height: '90px' }} />
        </NavLink>
      </div>

      <div className="links">
        {/* <ul>
            <li>
                Restaurants
            </li>
        </ul>
        <ul>
            <li>
                Recipes
            </li>
        </ul>
        <ul>
            <li>
                About
            </li>
        </ul>
        <ul>
            <li>
                Page <span className={`drop ${isRotated ? 'rotate' : ''}`} onClick={toggleRotation}>&#8250;</span>
            </li>
        </ul> */}
        <ul>
          <li>
              Restaurants
          </li>
          <li>
              Recipes
          </li>
          <li>
              About
          </li>
          <li>
              Page <span className={`drop ${isRotated ? 'rotate' : ''}`} onClick={toggleRotation}>&#8250;</span>
          </li>
        </ul>
      </div>
      
      <div className="buttons">
        <button className='login'>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default NavBar;
