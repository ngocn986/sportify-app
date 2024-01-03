/* eslint-disable quotes */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from './footer';
import BtnPlay from './BtnPlay';
function showPlayList() {
  const [playLists, setPlayLists] = useState([]);
  const [stateShowAll, setStateShowAll] = useState(true);
  const playlists = [
    {
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      title: 'Title 3',
      description: 'Description 3',
    },
    {
      title: 'Title 4',
      description: 'Description 4',
    },
    {
      title: 'Title 5',
      description: 'Description 5',
    },
    {
      title: 'Title 6',
      description: 'Description 6',
    },
    {
      title: 'Title 7',
      description: 'Description 7',
    },
    {
      title: 'Title 8',
      description: 'Description 8',
    },
  ];
  const handleShowAll = () => {
    setPlayLists(playlists);
    setStateShowAll(false);
  };
  useEffect(() => {
    setPlayLists(playlists.slice(0, 7));
  }, []);
  const cardPlayList = () => {
    return (
      <div className='flex flex-wrap gap-4 px-7'>
        {playLists.map((item, i) => (
          <div
            key={i}
            className='max-w-[177px] h-[259px] p-4 rounded-md bg-[#161616] hover:bg-[#242424] duration-500 relative group'
          >
            <div className='absolute right-6 top-[100px] transition-transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
              <BtnPlay />
            </div>
            <img
              className='rounded-md h-[60%] mb-4'
              src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg'
              alt='no picture'
            />
            <p className='text-white font-bold font-sans truncate'>
              {item.title}
            </p>
            <span className='text-[#7c7c7c] font-sans text-sm break-words line-clamp-2 '>
              {item.description}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='bg-gradient-to-b from-[#1f1f1f] to-black h-[785px] rounded-b-lg'>
      <header className='flex justify-between'>
        <button className='text-white font-bold text-2xl py-1 px-3 pb-6 font-sans hover:underline'>
          Spotify Playlists
        </button>
        <span
          onClick={handleShowAll}
          className={`text-[#b3b3b3] font-bold text-sm mx-6 my-4 hover:underline cursor-pointer ${
            stateShowAll ? 'block' : 'hidden'
          }`}
        >
          Show All
        </span>
      </header>
      {/* Card */}
      <div>{cardPlayList()}</div>
      <Footer></Footer>
      <div className='border-b-[1px] w-11/12 mx-14 items-center border-gray-400'></div>
    </div>
  );
}

export default showPlayList;
