import React from 'react';

const Sports: React.FC = () => {
  return (
    <div className="sports">
      <h2 className="heading text-black ml-4 mb-8 mt-8 dark:text-white">Sports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-4">
        {/* First Card */}
        <div className="bg-white shadow-lg p-4 transition duration-300 transform hover:scale-105 dark:bg-slate-600">
          <img src="/Assets/player1.png" className="w-full h-auto hover:opacity-75" alt="Player 1" />
          <h3 className="text-lg mb-2 text-black hover:text-blue-700 dark:text-white opacity-90">Sacramento River Cats</h3>
          <div className='bg-white shadow-lg opacity-80 hover:opacity-80 dark:bg-gray-800 '>
            <ul>
              <li className='p-2 text-black dark:text-white opacity-90'>Total Events</li> 
              <li className='pl-2 pb-2 text-black dark:text-white opacity-90'>48 Events</li>
            </ul>
          </div>
        </div>
        {/* Second Card */}
        <div className="bg-white shadow-lg p-4 transition duration-300 transform hover:scale-105 dark:bg-slate-600">
          <img src="/Assets/player2.png" className="w-full h-auto hover:opacity-75" alt="Player 2" />
          <h3 className="text-lg mb-2 text-black hover:text-blue-600 dark:text-white opacity-90">Sacramento River Cats</h3>
          <div className='bg-white shadow-lg opacity-80 hover:opacity-100 dark:bg-gray-800 '>
            <ul>
              <li className='p-2 text-black dark:text-white opacity-90'>Total Events</li>
              <li className='pl-2 pb-2 text-black dark:text-white opacity-90'>28 Events</li>
            </ul>
          </div>
        </div>
        {/* Third Card */}
        <div className="bg-white shadow-lg p-4 transition duration-300 transform hover:scale-105 dark:bg-slate-600">
          <img src="/Assets/player3.png" className="w-full h-auto hover:opacity-75" alt="Player 3" />
          <h3 className="text-lg mb-2 text-black hover:text-blue-600 dark:text-white opacity-90">Sacramento River Cats</h3>
          <div className='bg-white shadow-lg opacity-80 hover:opacity-100 dark:bg-gray-800 '>
            <ul>
              <li className='p-2 text-black dark:text-white opacity-90'>Total Events</li>
              <li className='pl-2 pb-2 text-black dark:text-white opacity-90'>15 Events</li>
            </ul>
          </div>
        </div>
        {/* Fourth Card */}
        <div className="bg-white shadow-lg p-4 transition duration-300 transform hover:scale-105 dark:bg-slate-600">
          <img src="/Assets/player2.png" className="w-full h-auto hover:opacity-75" alt="Player 4" />
          <h3 className="text-lg mb-2 text-black hover:text-blue-600 dark:text-white opacity-90">Sacramento River Cats</h3>
          <div className='bg-white shadow-lg opacity-80 hover:opacity-100 dark:bg-gray-800 '>
            <ul>
              <li className='p-2 text-black dark:text-white opacity-90'>Total Events</li>
              <li className='pl-2 pb-2 text-black dark:text-white opacity-90'>28 Events</li>
            </ul>
          </div>
        </div>
        {/* Fifth Card */}
        <div className="bg-white shadow-lg p-4 transition duration-300 transform hover:scale-105 dark:bg-slate-600">
          <img src="/Assets/Addvertise.png" className="w-full h-auto hover:opacity-75" alt="Advertisement" />
          <h3 className="text-lg mb-2 text-black hover:text-blue-600 dark:text-white opacity-90">Sacramento River Cats</h3>
          <p className='text-black hover:text-blue-600 dark:text-white opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus ex veritatis aliquam laboriosam quis corrupti nisi voluptas harum!</p>
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
          View More
        </button>
      </div>
    </div>
  );
};

export default Sports;
