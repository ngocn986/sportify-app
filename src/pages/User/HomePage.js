import React, { useEffect, useState } from 'react';
import SideBarLogo from '../../components/SidebarLogo';
import YourLibrary from '../../components/YourLibrary';
import BtnLogin from '../../components/BtnLogin';
import { NavLink, Outlet } from 'react-router-dom';
function HomePage() {
  const [token, setToken] = useState('');
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((ele) => ele.startsWith('access_token'))
        .split('=')[1];
      console.log('token: ', token);
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
    setToken(token);
  }, []);
  const handleLogout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }
  return (
    <div>
      <div className='flex'>
        <div className='basis-1/2 max-w-md m-2'>
          <SideBarLogo></SideBarLogo>
          <div className='basis-11/12 my-2'>
            <YourLibrary></YourLibrary>
          </div>
        </div>
        <div className='basis-11/12 my-2'>
          <header className='bg-[#101010] py-4 rounded-t-md'>
            <div className='flex justify-end gap-3 text-[#a7a7a7] font-bold text-[16px] '>
              <NavLink
                className='my-2 hover:text-white hover:scale-105'
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
                <button onClick={handleLogout} className='text-black border text-[16px] border-white rounded-3xl bg-white px-6 py-2 mx-4 hover:scale-105 hover:bg-gray-100'>
                  Logout
                </button>
              )}
            </div>
          </header>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
