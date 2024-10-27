import PropTypes from 'prop-types';
import bannerLogo from './assets/banner-main.png'
import './style.css'
const Banner = ({ handleAddCoins }) => {
  return (
    <div className="flex flex-col space-y-2 w-11/12 mx-auto justify-center items-center bg-image bg-black p-10 rounded-2xl">
      <div>
        <img src={bannerLogo} alt="banner-logo" />
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="font-bold text-4xl text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-lg text-white">Beyond Boundaries Beyond Limits</p>
        <div className="border-2 p-1 rounded-xl border-lime-300">
          <button
            onClick={handleAddCoins}
            className="btn bg-[#E7FE29] hover:bg-green-300 hover:text-white border-none"
          >
            Claim Free Reward
          </button>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
    handleAddCoins: PropTypes.func.isRequired,
}
export default Banner;