import React, { useEffect, useState } from 'react';
import SideBarLogo from '../../components/SidebarLogo';
import YourLibrary from '../../components/YourLibrary';
import BtnLogin from '../../components/BtnLogin';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import SearchService from '../../services/SearchService';
import SearchSong from './SearchSong';
import SearchAlbum from './SearchAlbum';
import SearchArtist from './SearchArtist';
import SearchPlaylist from './SearchPlaylist';
import SearchShow from './SearchShow';
function HomePage() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isBrowseAll, setIsBrowseAll] = useState(false);
  const [query, setQuery] = useState('');
  const [typeId, setType] = useState('');
  const [typeName, setTypeName] = useState('');
  const { q, type: routeType } = useParams();
  const navigate = useNavigate();
  setTimeout(() => {
    setToken('');
    navigate('login');
    window.localStorage.removeItem('token');
  }, 3.6e+6);
  const typeOption = [
    {
      id: 'track',
      name: 'Songs',
    },
  ];
  const handleLogout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };
  const handleBrowseAllChange = (value) => {
    setIsBrowseAll(value);
    setQuery('');
    setTypeName('');
    setType('');
  };
  const handleClearQuery = () => {
    setQuery('');
    setTypeName('');
    setType('');
    setIsBrowseAll(true);
    navigate('/search/browseAll');
  };

  const handleSearchPlaylist = (typeId, typeName) => {
    setType(typeId);
    setTypeName(typeName);
  };

  useEffect(() => {
    if (query === '' && typeId) {
      setTypeName('');
      setType('');
      setIsBrowseAll(true);
      navigate('/search/browseAll');
    }
  }, [query, typeId]);
  useEffect(() => {
    // Ở đây, chúng ta kiểm tra xem routeType có giá trị không.
    // Nếu có, ta cập nhật giá trị cho 'type' state.
    if (routeType && q) {
      setTypeName(routeType);
      setType(routeType);
      setQuery(q);
      setIsBrowseAll(true);
    }
    // Tiếp theo, bạn có thể thực hiện các hành động cần thiết với 'q' và 'type' ở đây.
  }, [routeType, q]);
  useEffect(() => {
    if (
      query &&
      (typeId === 'track' ||
        typeId === 'artist' ||
        typeId === 'playlist' ||
        typeId === 'album' ||
        typeId === 'show')
    ) {
      navigate(
        `search/${encodeURIComponent(query)}/${encodeURIComponent(typeId)}`
      );
    }
  }, [query, typeId]);
  return (
    <div>
      <div className='flex bg-black'>
        <div className='basis-1/2 max-w-md ml-2 mt-2'>
          <SideBarLogo onBrowseAllChange={handleBrowseAllChange}></SideBarLogo>
          <div className='basis-11/12 my-2'>
            <YourLibrary></YourLibrary>
          </div>
        </div>
        <div className='basis-11/12 my-2 mx-2'>
          <header className='bg-[#101010] py-4 rounded-t-md'>
            <div
              className={`flex ${
                isBrowseAll ? 'justify-around' : 'justify-end'
              } gap-3 text-[#a7a7a7] font-bold text-[16px]`}
            >
              {/* Search */}
              {isBrowseAll && (
                <div className='flex hover:border flex-1 bg-[#242424] w-1/2 ml-10 mr-[600px] h-14 rounded-full hover:border-gray-300 group'>
                  <svg
                    width='25px'
                    height='25px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='#000000'
                    className='my-4 mx-3 group-hover:stroke-white '
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                    <g
                      id='SVGRepo_tracerCarrier'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <path
                        d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
                        stroke='#bbbbbb'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />{' '}
                    </g>
                  </svg>
                  <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='What do you want to listen to?'
                    className='h-3/4 my-2 w-[80%] bg-[#242424] focus:outline-none focus:border-4 border-transparent'
                  ></input>
                  {query ? (
                    <button onClick={handleClearQuery}>
                      <svg
                        width='20px'
                        height='20px'
                        viewBox='-0.5 0 25 25'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        stroke='#000000'
                        className='mt-[17px] mb-[17px] mx-2'
                      >
                        <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                        <g
                          id='SVGRepo_tracerCarrier'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <g id='SVGRepo_iconCarrier'>
                          {' '}
                          <path
                            d='M3 21.32L21 3.32001'
                            stroke='#bbbbbb'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />{' '}
                          <path
                            d='M3 3.32001L21 21.32'
                            stroke='#bbbbbb'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />{' '}
                        </g>
                      </svg>
                    </button>
                  ) : null}
                </div>
              )}
              <NavLink
                className='my-2 w-10 text-end hover:text-white hover:scale-105 mr-7'
                to={'/spotify/premium'}
              >
                Premium
              </NavLink>
              <NavLink
                className='my-2 hover:text-white hover:scale-105'
                to={'/spotify/support'}
              >
                Support
              </NavLink>
              <NavLink
                className='my-2 hover:text-white hover:scale-105'
                to={'/spotify/download'}
              >
                Download
              </NavLink>
              <span className='px-5 my-2'>|</span>
              <NavLink
                className='my-2 hover:text-white hover:scale-105'
                to={'/spotify/sign_up'}
              >
                Sign up
              </NavLink>
              {!token ? (
                <BtnLogin></BtnLogin>
              ) : (
                <button
                  onClick={handleLogout}
                  className='text-black border h-12 text-[16px] border-white rounded-3xl bg-white px-6 py-2 mx-4 hover:scale-105 hover:bg-gray-100'
                >
                  Logout
                </button>
              )}
            </div>
            {query && (
              <div className='text-white mt-5 ml-8 flex gap-4 duration-500'>
                {typeOption &&
                  typeOption.map((type, i) => (
                    <span
                      key={i}
                      onClick={() => handleSearchPlaylist(type.id, type.name)}
                      className={`${
                        typeName === type.name || typeName === type.id
                          ? 'bg-white text-black border border-black hover:bg-white'
                          : ''
                      } border border-white cursor-pointer hover:bg-[#f1f1f123] bg-[#1f1f1f] font-semibold px-3 py-2 rounded-full`}
                    >
                      {type.name}
                    </span>
                  ))}
              </div>
            )}
          </header>
          <div>
            <Outlet></Outlet>
          </div>
          {query && typeId === 'track' && <SearchSong></SearchSong>}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
