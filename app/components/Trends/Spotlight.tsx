import React from 'react';

interface EventProps {
  teamName: string;
  date: string;
  location: string;
  flight: string;
  image: string;
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
}

const Event: React.FC<EventProps> = ({ teamName, date, location, flight, image, showLeftArrow = false, showRightArrow = false }) => {
  return (
    <div className='Spotlight'>
      <div className="relative bg-white shadow-2xl border-gray-600 p-4 md:h-[624px] md:w-[237px] transition duration-300 hover:opacity-75 mr-[4rem] ml-[5rem] dark:bg-slate-600">
        {/* Conditionally render left arrow */}
        {showLeftArrow && (
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 ml-[-5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=" text-blue-500 border-2 border-blue-500 w-[3rem] h-[4rem]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        )}
        {/* Conditionally render right arrow */}
        {showRightArrow && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 mr-[-5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className=" text-blue-500 border-2 border-blue-500 w-[3rem] h-[4rem]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
        {/* Image and other content */}
        <img src={image} className="w-217px h-385px" />
        {/* Dotted line below the image */}
        <div className="absolute left-3 w-[90%] border-t-2 border-gray-600 border-dashed opacity-50 mt-5 dark:border-white dark:opacity-500"></div>
        <div className="text-lg text-center text-black mt-8 mb-2 opacity-100 hover:text-red-600 dark:text-white">{teamName}</div>
        <div className="text-black text-center mb-2 opacity-90 hover:text-red-600 dark:text-white">{date}</div>
        <div className="text-black text-center mb-2 opacity-70 hover:text-red-600 dark:text-white">{location}</div>
        <div className="flex justify-center items-center h-10 mt-4 bg-black text-white font-inter text-center ">{flight}</div>
      </div>
    </div>
  );
};

const aviatorEvent1: EventProps = {
  teamName: 'Las Vegas Aviators ',
  date: 'OCT 15 | SUN | 4:30 PM',
  location: 'Las Vegas Ballpark, Las Vegas, Nevada',
  flight: 'Take Flight Collection ',
  image: '/Assets/sticker1.png', // Image path for spotlight 1
};

const aviatorEvent2: EventProps = {
  teamName: 'Sacramento River Cats ',
  date: 'OCT 15 | SUN | 4:30 PM',
  location: 'Shutter Health Park, Sacramento, California',
  flight: 'Orange Collection',
  image: '/Assets/sticker2.png', // Image path for spotlight 2
};

const aviatorEvent3: EventProps = {
  teamName: 'Las Vegas Aviators ',
  date: 'OCT 15 | SUN | 4:30 PM',
  location: 'Las Vegas Ballpark, Las Vegas, Nevada',
  flight: 'Take Flight Collection ',
  image: '/Assets/sticker1.png', // Image path for spotlight 3
};

const Spotlight = () => {
  return (
    <div className="container mx-auto w-full h-full">
      <h2 className="font-inter text-3xl text-black text-center mb-4 md:mb-8 transition duration-300 hover:opacity-75 dark:text-white">Collection Spotlight</h2>
      <h3 className="font-inter text-black text-center mb-4 md:mb-8 transition duration-300 hover:opacity-75 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores illo ducimus accusamus architecto repudiandae, maxime ipsum dicta suscipit praesentium.</h3>
      <div className="p-4 md:p-8 flex flex-col md:flex-row justify-between">
        {/* First spotlight with left arrow and gap */}
        <Event {...aviatorEvent1} showLeftArrow={true} />
        <div className="mt-4 md:mt-0 md:ml-[2rem] md:mr-[2rem]">
          <Event {...aviatorEvent2} />
        </div>
        <div className="">
          <Event {...aviatorEvent3} showRightArrow={true} />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
