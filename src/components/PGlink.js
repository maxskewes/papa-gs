import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

const PGlink = ({ to, children, isActive, isExternal }) => {

  let activeStyle = {
    textDecoration: "underline",
    color: 'red'
  };

  let activeClassName = "active";


  return (
    <NavLink
    // underline='none'
      to={to}
      // className={({ isActive }) => (isActive ? { activeClassName } : undefined)}
      sx={({ isActive }) =>
      isActive ? activeStyle : undefined
    }
    >
      {children}
    </NavLink>
  );
};

export default PGlink;
