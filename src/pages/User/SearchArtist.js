import { Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import BtnPlay from '../../components/BtnPlay';
import SearchService from '../../services/SearchService';

function SearchArtist() {
  const [artist, setArtist] = useState([]);
  const services = new SearchService();
  const { q, type } = useParams();
  const search = async (query, type) => {
    try {
      let response = await services.searchService(query, type);
      setArtist(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    search(q, type);
  }, [q, type]);
  return (
    <div className='bg-[#101010]'>
      <div className='flex flex-wrap gap-6 px-7'>
        {artist.artists?.items.map((item, i) => (
          <NavLink key={i} to={item.external_urls?.spotify}>
            <div className='mt-4 w-[197px] h-[275px] cursor-pointer p-4 rounded-md bg-[#161616] hover:bg-[#242424] duration-500 relative group'>
              <div className='absolute right-6 top-[100px] transition-transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
                <BtnPlay />
              </div>
              {item.images[0]?.url ? (
                <img
                  className='w-[164px] h-[164px] rounded-full mb-4'
                  src={item.images[0]?.url}
                  alt='no picture'
                />
              ) : (
                <div>
                  <svg
                    width='144px'
                    height='144px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='rounded-full'
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
                        d='M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z'
                        fill='#a3a3a3'
                      />{' '}
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.0055 2H12.9945C14.3805 1.99999 15.4828 1.99999 16.3716 2.0738C17.2819 2.14939 18.0575 2.30755 18.7658 2.67552C19.8617 3.24477 20.7552 4.1383 21.3245 5.23415C21.6925 5.94253 21.8506 6.71811 21.9262 7.62839C22 8.5172 22 9.61946 22 11.0054V12.9945C22 13.6854 22 14.306 21.9909 14.8646C22.0049 14.9677 22.0028 15.0726 21.9846 15.175C21.9741 15.6124 21.9563 16.0097 21.9262 16.3716C21.8506 17.2819 21.6925 18.0575 21.3245 18.7658C20.7552 19.8617 19.8617 20.7552 18.7658 21.3245C18.0575 21.6925 17.2819 21.8506 16.3716 21.9262C15.4828 22 14.3805 22 12.9946 22H11.0055C9.61955 22 8.5172 22 7.62839 21.9262C6.71811 21.8506 5.94253 21.6925 5.23415 21.3245C4.43876 20.9113 3.74996 20.3273 3.21437 19.6191C3.20423 19.6062 3.19444 19.5932 3.185 19.5799C2.99455 19.3238 2.82401 19.0517 2.67552 18.7658C2.30755 18.0575 2.14939 17.2819 2.0738 16.3716C1.99999 15.4828 1.99999 14.3805 2 12.9945V11.0055C1.99999 9.61949 1.99999 8.51721 2.0738 7.62839C2.14939 6.71811 2.30755 5.94253 2.67552 5.23415C3.24477 4.1383 4.1383 3.24477 5.23415 2.67552C5.94253 2.30755 6.71811 2.14939 7.62839 2.0738C8.51721 1.99999 9.61949 1.99999 11.0055 2ZM20 11.05V12.5118L18.613 11.065C17.8228 10.2407 16.504 10.2442 15.7182 11.0727L11.0512 15.9929L9.51537 14.1359C8.69326 13.1419 7.15907 13.1746 6.38008 14.2028L4.19042 17.0928C4.13682 16.8463 4.09606 16.5568 4.06694 16.2061C4.0008 15.4097 4 14.3905 4 12.95V11.05C4 9.60949 4.0008 8.59025 4.06694 7.79391C4.13208 7.00955 4.25538 6.53142 4.45035 6.1561C4.82985 5.42553 5.42553 4.82985 6.1561 4.45035C6.53142 4.25538 7.00955 4.13208 7.79391 4.06694C8.59025 4.0008 9.60949 4 11.05 4H12.95C14.3905 4 15.4097 4.0008 16.2061 4.06694C16.9905 4.13208 17.4686 4.25538 17.8439 4.45035C18.5745 4.82985 19.1702 5.42553 19.5497 6.1561C19.7446 6.53142 19.8679 7.00955 19.9331 7.79391C19.9992 8.59025 20 9.60949 20 11.05ZM6.1561 19.5497C5.84198 19.3865 5.55279 19.1833 5.295 18.9467L7.97419 15.4106L9.51005 17.2676C10.2749 18.1924 11.6764 18.24 12.5023 17.3693L17.1693 12.449L19.9782 15.3792C19.9683 15.6812 19.9539 15.9547 19.9331 16.2061C19.8679 16.9905 19.7446 17.4686 19.5497 17.8439C19.1702 18.5745 18.5745 19.1702 17.8439 19.5497C17.4686 19.7446 16.9905 19.8679 16.2061 19.9331C15.4097 19.9992 14.3905 20 12.95 20H11.05C9.60949 20 8.59025 19.9992 7.79391 19.9331C7.00955 19.8679 6.53142 19.7446 6.1561 19.5497Z'
                        fill='#a3a3a3'
                      />{' '}
                    </g>
                  </svg>
                </div>
              )}
              <Tooltip title={item.name}>
                <p className='text-white font-bold font-sans truncate text-[15px]'>
                  {item.name}
                </p>
              </Tooltip>
              <span className='text-[#7c7c7c] font-sans text-sm break-words line-clamp-2 '>
                {item.type}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SearchArtist;
