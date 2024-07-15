import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleEffect = (link) => {
    setActiveLink(link);
    setTimeout(() => {
      setActiveLink(null);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={[
        scrolled ? 'bg-secondary fixed top-0 right-0 left-0' : 'bg-primary',
        'p-3 h-[75px] items-center',
      ].join(' ')}
    >
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link
            onClick={() => handleEffect('home')}
            className={[
              activeLink === 'home' ? 'bg-gray-300' : '',
              'p-2 rounded-lg',
            ].join(' ')}
            to="/"
          >
            LOGO
          </Link>
        </div>

        <div>
          <div className="hidden md:flex gap-3 text-xl">
            {/* <Link className="bg-white text-primary p-2 font-bold rounded-lg">
              Login
            </Link>
            <Link className="bg-white text-primary p-2 font-bold rounded-lg">
              Register
            </Link>
            <Link className="bg-white text-primary p-2 font-bold rounded-lg">
              Profile
            </Link> */}

            <Link
              to="/login"
              onClick={() => handleEffect('login')}
              className={[
                activeLink === 'login' ? 'bg-gray-300' : '',
                'bg-white text-primary p-2 font-bold rounded-lg border border-secondary',
              ].join(' ')}
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => handleEffect('register')}
              className={[
                activeLink === 'register' ? 'bg-gray-300' : '',
                'bg-white text-primary p-2 font-bold rounded-lg border border-secondary',
              ].join(' ')}
            >
              Register
            </Link>
            <Link
              to="/profile"
              onClick={() => handleEffect('profile')}
              className={[
                activeLink === 'profile' ? 'bg-gray-300' : '',
                'bg-white text-primary p-2 font-bold rounded-lg border border-secondary',
              ].join(' ')}
            >
              Profile
            </Link>
          </div>

          <div className="">
            <button className="md:hidden" onClick={handleToggle}>
              {toggle ? (
                <IoMdClose className="text-4xl" />
              ) : (
                <IoMdMenu className="text-4xl" />
              )}
            </button>
            <div
              className={[
                toggle
                  ? 'fade-enter fade-enter-active'
                  : 'fade-exit fade-exit-active',
                'bg-primary absolute top-[75px] w-[30vw] pl-10  pb-10 items-start right-0 flex flex-col gap-3 text-xl',
              ].join(' ')}
            >
              <Link
                to="/login"
                onClick={() => handleEffect('login')}
                className={[
                  activeLink === 'login' ? 'bg-gray-200' : 'text-white',
                  'text-white p-2 font-bold rounded-lg border border-secondary',
                ].join(' ')}
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => handleEffect('register')}
                className={[
                  activeLink === 'register' ? 'bg-gray-200' : 'text-white',
                  'text-white p-2 font-bold rounded-lg border border-secondary',
                ].join(' ')}
              >
                Register
              </Link>
              <Link
                to="/profile"
                onClick={() => handleEffect('profile')}
                className={[
                  activeLink === 'profile' ? 'bg-gray-200' : 'text-white',
                  'text-white p-2 font-bold rounded-lg border border-secondary',
                ].join(' ')}
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
