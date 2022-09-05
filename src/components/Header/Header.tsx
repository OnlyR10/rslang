import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useApplicationAccessContext from '../../hooks/useApplicationAccessContext';
import classes from './Header.module.scss';
import Logo from './Logo/Logo';
import Navbar from './Navigation/Navigation';

const Header: React.FC<{ navigationHide?: boolean }> = ({ navigationHide }) => {
  const { isSignedIn, setIsSignedIn } = useApplicationAccessContext();
  const navigate = useNavigate();
  const location = useLocation();

  const clickHandler = () => {
    if (location.pathname === '/statistic') {
      navigate('/');
    }
    setIsSignedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        {!navigationHide ? (
          <>
            <Navbar />
            {isSignedIn ? (
              <button onClick={clickHandler} className={classes.buttonAuthor}>
                ВЫЙТИ
              </button>
            ) : (
              <Link to="/authorization" className={classes.buttonAuthor}>
                ВОЙТИ
              </Link>
            )}
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
