import React from "react";
import PropTypes from "prop-types";
import '../../../public/css/header.css';


function Header({ directions, links}) {
  return (
    <>
    <header>
      <div className="svg">
        {directions.map((direction, index) => (
          <svg
            id="torre-svg"
            className="svg-item"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={direction.code} 
            key={index}
          >
            <path d={direction.path} /> 
          </svg>
        ))}
      </div>
      <div>
        <nav>
          <ul>
            {links.map((link, index)=>
            <li className="lista" key={index}>
              <a href={link.url}>{link.name}
              </a>
            </li>
            )}
            
          </ul>
        </nav>
      </div>
      </header>
   
    </>
  );
}

Header.propTypes = {
  directions: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  )
};

export default Header;
