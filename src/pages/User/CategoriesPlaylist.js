import React, { useCallback, useEffect, useState } from 'react';
import PlaylistService from '../../services/PlaylistService';
import BtnPlay from '../../components/BtnPlay';
import Footer from '../../components/footer';
import { NavLink } from 'react-router-dom';
import { Empty } from 'antd';
function CategoriesPlaylist() {
  const categoriesId = window.location.pathname.split('/')[2].split('&')[0];
  const categoriesName = window.location.pathname.split('/')[2].split('&')[1];
  const color = window.location.hash;
  const [categoriesPlaylist, setCategoriesPlaylist] = useState([]);
  const [emptyPlaylist, setEmptyPlaylist] = useState(false);
  const [stateShowAll, setStateShowAll] = useState(true);
  const getCategoriesPlaylist = async (categoryId) => {
    try {
      let services = new PlaylistService();
      let response = await services.getCategoriesPlaylist(categoryId);
      if (response.status === 200) {
        if (stateShowAll) {
          console.log('check');
          setCategoriesPlaylist(response.data.playlists.items.slice(0, 7));
        } else {
          console.log('check1');
          setCategoriesPlaylist(response.data.playlists.items);
        }
      }
    } catch (error) {
      if (error.message === 'Request failed with status code 404') {
        setEmptyPlaylist(true);
      }
    }
  };

  const handleShowAll = async () => {
    setStateShowAll(false);
  };

  useEffect(() => {
    getCategoriesPlaylist(categoriesId);
  }, [stateShowAll, categoriesId]);

  useEffect(() => {
    if (categoriesId) {
      getCategoriesPlaylist(categoriesId);
    }
  }, [categoriesId]);
  return (
    <div>
      {emptyPlaylist ? (
        <div
          style={{
            background: `linear-gradient(to bottom, ${color}, #1f1f1f)`,
          }}
          className='bg-gradient-to-b from-[#1f1f1f] to-black h-[885px] rounded-b-lg overflow-auto'
        >
          <div className='my-10'>
            <Empty />
          </div>
        </div>
      ) : (
        <div
          className='bg-gradient-to-b from-[#1f1f1f] to-black h-[885px] rounded-b-lg overflow-auto'
          style={{
            background: `linear-gradient(to bottom, ${color}, #1f1f1f)`,
          }}
        >
          <header className='font-bold text-white text-8xl px-8 pt-28 pb-10'>
            {categoriesName}
          </header>
          <div className='bg-black bg-opacity-20 '>
            <nav className='flex justify-between'>
              <button
                onClick={handleShowAll}
                className='text-white font-bold text-2xl pt-8 px-10 pb-6 font-sans hover:underline'
              >
                {categoriesName} Playlists
              </button>
              <span
                onClick={handleShowAll}
                className={`text-[#b3b3b3] font-bold text-sm mx-6 mt-10 hover:underline cursor-pointer ${
                  stateShowAll ? 'block' : 'hidden'
                }`}
              >
                Show all
              </span>
            </nav>
            <div>
              <div className='flex flex-wrap gap-4 px-7'>
                {categoriesPlaylist &&
                  categoriesPlaylist.map((item, i) => (
                    <NavLink key={i} to={`/playlist/${item.id}`}>
                      <div className='cursor-pointer max-w-[185px] h-[259px] p-4 mx-2 mb-10 rounded-md bg-[#161616] hover:bg-[#242424] duration-500 relative group'>
                        <div className='absolute right-6 top-[100px] transition-transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'>
                          <BtnPlay />
                        </div>
                        {item.images.map((image, i) => (
                          <img
                            key={i}
                            className='rounded-md h-[60%] w-full mb-4'
                            src={image.url}
                            alt='no picture'
                          />
                        ))}
                        <p className='font-bold text-white font-sans truncate'>
                          {item.name}
                        </p>
                        <span className='text-[#7c7c7c] font-thin text-sm break-words line-clamp-2 '>
                          {item.description}
                        </span>
                      </div>
                    </NavLink>
                  ))}
              </div>
            </div>
            <div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoriesPlaylist;
