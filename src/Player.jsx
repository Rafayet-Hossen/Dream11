import PropTypes from 'prop-types';


const Player = ({player}) => {
    const{name,country,role,battingRole,bowlingRole,price,image} = player;
    return (
      <div className="border w-96 p-5 space-y-2 rounded-xl">
        <div>
          <img className='rounded-xl h-72 w-96' src={image} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            {name}
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-gray-400 flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                clipRule="evenodd"
              />
            </svg>
            {country}
          </h1>
          <h1 className='border px-2 py-1 rounded-xl bg-base-200 font-bold'>{role}</h1>
        </div>
        <hr />
        <div className="flex flex-row justify-between">
          <h2 className="font-regular">{battingRole}</h2>
          <h2 className="font-regular">{bowlingRole}</h2>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-lg">{price}</h1>
          <button className="border px-3 py-1 mt-1 rounded-xl bg-base-200 font-bold hover:bg-base-300">
            Choose Player
          </button>
        </div>
      </div>
    );
};
Player.propTypes = {
    player:PropTypes.object.isRequired,
}
export default Player;