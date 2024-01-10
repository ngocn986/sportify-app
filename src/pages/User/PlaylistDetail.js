import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PlaylistService from '../../services/PlaylistService';
import IconSpotify from '../../components/iconSpotify';
import BtnPlayInPlaylist from '../../components/BtnPlayInPlaylist';
import SaveToLibraryIcon from '../../components/saveToLibraryIcon';
import MoreIcon from '../../components/MoreIcon';
import TimerDuration from '../../components/TimerDuration';
import { NavLink, useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
function PlaylistDetail() {
  const [dataPlaylist, setDataPlaylist] = useState([]);
  const [durationsInMs, setDurationsInMs] = useState([]);
  const service = new PlaylistService();
  const { playlistId } = useParams();
  const getPlaylist = async (playListId) => {
    try {
      const response = await service.getPlaylist(playListId);
      if (response.status === 200) {
        setDataPlaylist(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPlaylist(playlistId);
  }, [playlistId]);
  useEffect(() => {
    if (dataPlaylist?.tracks?.items) {
      const index = Math.ceil(dataPlaylist.tracks.items.length / 2);
      const duration = dataPlaylist.tracks.items
        .slice(0, index)
        .map((item) => item.track.duration_ms);

      setDurationsInMs((prev) => [...prev, ...duration]);
    }
  }, [dataPlaylist?.tracks?.items]);

  const added_at = (addedAt) => {
    const formattedDate = formatDistanceToNow(new Date(addedAt), {
      addSuffix: true,
    });
    return <div className='flex-1'>{formattedDate}</div>;
  };
  const totalDuration = (totalMilliseconds) => {
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (hours > 0) {
      return (
        <div className='font-thin text-[#b0b1b4] font-semibold'>{`about ${hours} hr ${minutes} min`}</div>
      );
    } else {
      return (
        <div className='font-thin text-[#b0b1b4] font-sans'>{`about ${minutes} min`}</div>
      );
    }
  };
  const convertMS = (durationInMs) => {
    const minutes = Math.floor(durationInMs / (1000 * 60));
    const seconds = Math.floor((durationInMs % (1000 * 60)) / 1000);

    const formattedMinutes = String(minutes).padStart(1, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const tableListPlaylist = () => {
    return (
      <>
        <div className='bg-gradient-to-b from-[#2d2b26] max-h-[535px] rounded-b-xl'>
          <div className='p-10 flex gap-8 bg-gradient-to-b from-[#554f43] to-[#2d2b26]'>
            <BtnPlayInPlaylist></BtnPlayInPlaylist>
            <div className='pt-3'>
              <SaveToLibraryIcon></SaveToLibraryIcon>
            </div>
            <div className='pt-3'>
              <MoreIcon></MoreIcon>
            </div>
          </div>
          <div className='mx-8'>
            {/* Column Headers */}
            <div className='border-b-[0.5px] mb-8'>
              <div className='flex justify-around gap-4 pt-8 pb-3 text-[#8f8f8f]'>
                <div className='pl-5'>#</div>
                <div className='flex-grow'>Title</div>
                <div className='flex-1'>Album</div>
                <div className='flex-1'>Date added</div>
                <div className='px-10'>
                  <TimerDuration></TimerDuration>
                </div>
              </div>
            </div>
            {/* Data Rows */}
            {dataPlaylist &&
              dataPlaylist.tracks &&
              dataPlaylist.tracks?.items.map((item, i) => (
                <div
                  key={i}
                  className='text-[#8f8f8f] hover:bg-[#4b4b4a] group'
                >
                  <div className='flex justify-around gap-4 pt-2 text-[#8f8f8f]'>
                    <div className='pl-5 py-3 text-[20px]'>{i + 1}</div>
                    {/* Title */}
                    <div className='flex-1'>
                      <div className='flex gap-3'>
                        <img
                          className='w-[45px] h-[45px] rounded-md'
                          src={item.track?.album?.images[1]?.url}
                          alt='album cover'
                        ></img>
                        {/* Track */}
                        <div>
                          <div className='cursor-pointer hover:underline text-white font-sans text-[16px]'>
                            <NavLink to={item.track?.external_urls?.spotify}>
                              {item.track?.name}
                            </NavLink>
                          </div>
                          <div className='flex'>
                            {item.track?.artists && (
                              <div>
                                {item.track.artists.map((artist, i) => (
                                  <NavLink key={i} to={`/artist/${artist.id}`}>
                                    <span className='cursor-pointer hover:underline hover:text-white group-hover:text-white'>
                                      {artist.name}
                                      {i < item.track.artists.length - 1 &&
                                        ', '}
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
                        to={item.track?.album?.external_urls?.spotify}
                        className='hover:underline hover:text-white group-hover:text-white'
                      >
                        {item.track?.album?.name}
                      </NavLink>
                    </div>
                    {/* Date added */}
                    {added_at(item.added_at)}
                    <div className='px-10  py-2'>
                      {convertMS(item.track?.duration_ms)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='bg-gradient-to-b from-[#1f1f1f] to-black h-[885px] rounded-b-lg overflow-y-scroll overflow-x-hidden scroll-container'>
      <div className='relative w-full h-[350px] bg-gradient-to-b from-[#d5c6a7] to-[#6d6555]'>
        {dataPlaylist.images?.map((image, i) => (
          <img
            key={i}
            className='absolute top-10 left-5 w-[252px] h-[252px] shadow-black shadow-2xl'
            src={image.url}
            alt={`Image ${i}`}
          />
        ))}
        <div className='absolute top-20 left-[295px] text-white font-thin'>
          Play list
        </div>
        <p className='absolute top-28 left-[295px] break-words text-white font-bold text-7xl truncate'>
          {dataPlaylist.name}
        </p>
        <div className='absolute top-56 left-[300px] text-[#bdb8ae] text-[14px] font-semibold'>
          {dataPlaylist.description}
        </div>
        <div className='flex text-white font-bold text-md absolute top-64 left-[295px]'>
          <IconSpotify></IconSpotify>
          <span className='mt-1.5 hover:underline px-2'>Spotify</span>
          <div>
            <ul className='flex gap-6 list-disc px-4 pt-1.5'>
              <li className='font-thin font-sans'>{`${dataPlaylist.followers?.total.toLocaleString()} likes`}</li>
              <li className='font-thin font-sans'>{`${dataPlaylist.tracks?.total} songs`}</li>
              <li>
                {totalDuration(
                  durationsInMs.reduce((acc, duration) => acc + duration, 0)
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>{tableListPlaylist()}</div>
    </div>
  );
}

export default PlaylistDetail;
