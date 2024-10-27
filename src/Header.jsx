import logo from './assets/logo.png'
import PropTypes from 'prop-types';
const Header = ({coins}) => {
    return (
      <div className='w-11/12 mx-auto'>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <img src={logo} alt="our-logo" />
          </div>
          <div className="flex-none">
            <ul className="menu px-1">
              <li className="flex flex-row justify-center items-center gap-3">
                <a>Home</a>
                <a>About</a>
                <a>Fixture</a>
                <a>Schedule</a>
                <button className="btn font-bold text-xl bg-white shadow border">
                  <span>{coins}</span>Coins{" "}
                  <img
                    className="h-6 w-6"
                    src="https://img.icons8.com/?size=64&id=6U2tFbH0pmLw&format=png"
                    alt=""
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

Header.propTypes = {
  coins: PropTypes.number.isRequired,
};


export default Header;