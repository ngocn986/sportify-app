import { Button, Result } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ErrorAuthorize() {
  return (
    <div className='bg-white h-[930px] rounded-xl py-36'>
      <Result
        className='text-white'
        status='403'
        title='403'
        subTitle='Sorry, you are not authorized to access this page.'
        extra={
          <NavLink to={'/login'}>
            <Button className='bg-black' type='primary'>
              Login
            </Button>
          </NavLink>
        }
      />
    </div>
  );
}
