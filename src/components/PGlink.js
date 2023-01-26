import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const PGlink = ({ to, children }) => {
  return (
    <NavLink underline='none' to={to} cursor='pointer' display='flex'>
      {children}
    </NavLink>
  );
};

export default PGlink;
