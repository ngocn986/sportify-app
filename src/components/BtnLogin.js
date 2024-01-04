import React from 'react';
import { NavLink } from 'react-router-dom';

function BtnLogin() {
  return (
    <div>
      <NavLink to={'login'}>
        <button className='text-black border text-[16px] border-white rounded-3xl bg-white px-6 py-2 mx-4 hover:scale-105 hover:bg-gray-100'>
          Login
        </button>
      </NavLink>
    </div>
  );
}

export default BtnLogin;
