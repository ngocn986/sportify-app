import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import { NavLink, useParams } from 'react-router-dom';
import TimerDuration from '../../components/TimerDuration';
import SearchService from '../../services/SearchService';

function SearchSong() {
  const [tracks, setTracks] = useState([]);
  const services = new SearchService();
  const { q, type } = useParams();
  const search = async (query, type) => {
    try {
      let response = await services.searchService(query, type);
      setTracks(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    search(q, type);
  }, [q, type]);
  const convertMS = (durationInMs) => {
    const minutes = Math.floor(durationInMs / (1000 * 60));
    const seconds = Math.floor((durationInMs % (1000 * 60)) / 1000);

    const formattedMinutes = String(minutes).padStart(1, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  return (
    <div>
      <div className='bg-gradient-to-b from-[#1f1f1f] to-black h-[850px] scroll-container rounded-b-lg overflow-auto'>
        <div className='mx-8'>
          {/* Column Headers */}
          <div className='border-b-[0.5px] mb-8'>
            <div className='flex justify-around gap-4 pt-8 pb-3 text-[#8f8f8f]'>
              <div className='pl-5'>#</div>
              <div className='flex-grow'>Title</div>
              <div className='flex-1'>Album</div>
              <div className='px-10'>
                <TimerDuration></TimerDuration>
              </div>
            </div>
          </div>
          {/* Data Rows */}
          {tracks &&
            tracks.tracks?.items &&
            tracks.tracks?.items?.map((item, i) => (
              <div key={i} className='text-[#8f8f8f] hover:bg-[#4b4b4a] group'>
                <div className='flex justify-around gap-4 pt-2 text-[#8f8f8f]'>
                  <div className='pl-5 py-3 text-[20px]'>{i + 1}</div>
                  {/* Title */}
                  <div className='flex-1'>
                    <div className='flex gap-3'>
                      <img
                        className='w-[45px] h-[45px] rounded-md'
                        src={item.album?.images[1]?.url}
                        alt='album cover'
                      ></img>
                      {/* Track */}
                      <div>
                        <div className='cursor-pointer hover:underline text-white font-sans text-[16px]'>
                          <NavLink to={item.external_urls?.spotify}>
                            {item.name}
                          </NavLink>
                        </div>
                        <div className='flex'>
                          {item?.artists && (
                            <div>
                              {item?.artists.map((artist, i) => (
                                <NavLink
                                  key={i}
                                  to={artist.external_urls?.spotify}
                                >
                                  <span className='cursor-pointer hover:underline hover:text-white group-hover:text-white'>
                                    {artist.name}
                                    {i < item.artists.length - 1 && ', '}
                                  </span>
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Album */}
                  <div className='py-2 flex-1'>
                    <NavLink
                      to={item.album?.external_urls?.spotify}
                      className='hover:underline hover:text-white group-hover:text-white'
                    >
                      {item.album?.name}
                    </NavLink>
                  </div>
                  {/* Date added */}
                  <div className='px-10  py-2'>
                    {convertMS(item.duration_ms)}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className='mx-5'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default SearchSong;
