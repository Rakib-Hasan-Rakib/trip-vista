import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Menu = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
      <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        {user ? (
          <Link onClick={logOut}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    );
};

export default Menu;