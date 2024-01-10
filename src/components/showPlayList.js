/* eslint-disable quotes */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Tooltip } from 'antd';
import Footer from './footer';
import BtnPlay from './BtnPlay';
import PlaylistService from '../services/PlaylistService';
import { NavLink } from 'react-router-dom';
function showPlayList() {
  const services = new PlaylistService();
  const [playLists, setPlayLists] = useState([]);
  const [stateShowAll, setStateShowAll] = useState(true);
  const [featurePlaylist, setFeaturePlaylist] = useState([]);
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

  const getFeaturedPlaylists = async () => {
    try {
      const response = await services.getFeaturedPlaylists();
      setFeaturePlaylist(response.data);
    } catch (error) {
      console.error('error', error.message);
    }
  };
  const handleShowAll = () => {
    setPlayLists(playlists);
    setStateShowAll(false);
  };
  useEffect(() => {
    setPlayLists(playlists.slice(0, 7));
    getFeaturedPlaylists();
  }, []);
  const cardPlayList = () => {
    return (
      <>
        {stateShowAll ? (
          <div className='flex flex-wrap gap-4 px-7'>
            {featurePlaylist?.playlists?.items.slice(0, 8).map((item, i) => (
              <NavLink key={i} to={`/playlist/${item.id}`}>
                <div className='max-w-[177px] h-[259px] cursor-pointer p-4 rounded-md bg-[#161616] hover:bg-[#242424] duration-500 relative group'>
                  <div className='absolute right-6 top-[100px] transition-transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
                    <BtnPlay />
                  </div>
                  {item.images?.map((image, i) => (
                    <img
                      key={i}
                      className='rounded-md h-[60%] w-full mb-4'
                      src={image.url}
                      alt='no picture'
                    />
                  ))}
                  <Tooltip title={item.name}>
                    <p className='text-white font-bold font-sans truncate'>
                      {item.name}
                    </p>
                  </Tooltip>
                  <span className='text-[#7c7c7c] font-sans text-sm break-words line-clamp-2 '>
                    {item.description}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        ) : (
          <div className='flex flex-wrap gap-4 px-7'>
            {featurePlaylist?.playlists?.items.map((item, i) => (
              <NavLink key={i} to={`/playlist/${item.id}`}>
                <div className='max-w-[177px] h-[259px] cursor-pointer p-4 rounded-md bg-[#161616] hover:bg-[#242424] duration-500 relative group'>
                  <div className='absolute right-6 top-[100px] transition-transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
                    <BtnPlay />
                  </div>
                  {item.images?.map((image, i) => (
                    <img
                      key={i}
                      className='rounded-md h-[60%] w-full mb-4'
                      src={image.url}
                      alt='no picture'
                    />
                  ))}
                  <Tooltip title={item.name}>
                    <p className='text-white font-bold font-sans truncate'>
                      {item.name}
                    </p>
                  </Tooltip>
                  <span className='text-[#7c7c7c] font-sans text-sm break-words line-clamp-2 '>
                    {item.description}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className='bg-gradient-to-b from-[#1f1f1f] h-[885px] rounded-b-lg overflow-y-auto scroll-container'>
      <header className='flex justify-between'>
        <button className='text-white font-bold text-2xl py-2 px-4 pb-6 font-sans hover:underline'>
          {featurePlaylist.message}
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
