import React, { useState } from 'react';
import { Switch } from 'antd';
import AuthService from '../../services/AuthService';
import '../../index.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [stateSwitch, setStateSwitch] = useState(true);
  const navigate = useNavigate()
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSwitchRemember = () => {
    setStateSwitch(!stateSwitch);
  };

  const handleLogin = async () => {
    try {
      const services = new AuthService();
      const response = await services.token();
      localStorage.setItem('token', response.data.access_token)
      navigate('/')
    } catch (error) {
      console.log('error: ', error.message);
    }
  };
  return (
    <div>
      <header>
        <div className='bg-black pl-7'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height={110}
            width={150}
            viewBox='-111.68505 -55.829 967.9371 334.974'
          >
            <path
              d='M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0m192.125 103.08c-19.279-4.598-22.71-7.825-22.71-14.605 0-6.405 6.03-10.714 14.998-10.714 8.693 0 17.312 3.273 26.35 10.012.274.204.616.285.954.232a1.24 1.24 0 00.833-.515l9.413-13.27c.387-.546.282-1.3-.24-1.717-10.756-8.63-22.868-12.826-37.025-12.826-20.816 0-35.356 12.49-35.356 30.365 0 19.167 12.543 25.952 34.217 31.192 18.448 4.25 21.562 7.808 21.562 14.173 0 7.052-6.295 11.436-16.427 11.436-11.253 0-20.432-3.79-30.7-12.682a1.329 1.329 0 00-.927-.302c-.34.028-.65.186-.866.446l-10.555 12.561c-.443.521-.387 1.3.125 1.75 11.947 10.666 26.64 16.3 42.495 16.3 22.432 0 36.925-12.257 36.925-31.226 0-16.032-9.577-24.899-33.066-30.61m100.098 21.486c0 13.537-8.34 22.984-20.28 22.984-11.803 0-20.707-9.876-20.707-22.984 0-13.107 8.904-22.984 20.708-22.984 11.748 0 20.279 9.664 20.279 22.984m-16.283-40.5c-9.723 0-17.697 3.83-24.273 11.676V86.91c0-.697-.566-1.265-1.263-1.265H344.8c-.698 0-1.262.568-1.262 1.265v98.136c0 .697.564 1.265 1.262 1.265h17.26c.698 0 1.264-.568 1.264-1.265v-30.977c6.577 7.382 14.553 10.988 24.273 10.988 18.065 0 36.353-13.907 36.353-40.491 0-26.59-18.288-40.5-36.353-40.5m83.231 63.625c-12.375 0-21.704-9.942-21.704-23.125 0-13.239 9.006-22.845 21.418-22.845 12.454 0 21.847 9.942 21.847 23.134 0 13.236-9.068 22.836-21.561 22.836m0-63.625c-23.266 0-41.492 17.915-41.492 40.79 0 22.625 18.101 40.351 41.206 40.351 23.348 0 41.631-17.854 41.631-40.641 0-22.71-18.157-40.5-41.345-40.5m91.027 1.579H542.86V66.223c0-.697-.562-1.265-1.26-1.265h-17.26c-.698 0-1.266.568-1.266 1.265v19.422h-8.3c-.695 0-1.258.568-1.258 1.265v14.835c0 .697.563 1.265 1.258 1.265h8.3v38.388c0 15.513 7.721 23.38 22.949 23.38 6.192 0 11.33-1.279 16.172-4.024.392-.22.637-.644.637-1.095v-14.128a1.264 1.264 0 00-1.829-1.133c-3.325 1.673-6.54 2.445-10.133 2.445-5.538 0-8.01-2.514-8.01-8.15V103.01h18.996c.698 0 1.259-.568 1.259-1.265V86.91c0-.697-.561-1.265-1.259-1.265m66.182.075v-2.385c0-7.018 2.69-10.147 8.725-10.147 3.6 0 6.49.715 9.727 1.795a1.262 1.262 0 001.66-1.202V59.233a1.26 1.26 0 00-.892-1.21c-3.42-1.018-7.796-2.063-14.348-2.063-15.945 0-24.372 8.98-24.372 25.956v3.653h-8.292a1.27 1.27 0 00-1.268 1.264v14.912c0 .696.57 1.266 1.268 1.266h8.292v59.212c0 .697.563 1.265 1.259 1.265h17.261c.697 0 1.265-.568 1.265-1.265V103.01h16.118l24.69 59.196c-2.804 6.22-5.56 7.457-9.322 7.457-3.042 0-6.244-.908-9.519-2.699a1.29 1.29 0 00-1.005-.094c-.33.116-.607.361-.747.681l-5.85 12.836a1.255 1.255 0 00.542 1.633c6.108 3.308 11.623 4.72 18.436 4.72 12.747 0 19.792-5.937 26.004-21.91l29.948-77.388a1.264 1.264 0 00-1.172-1.723h-17.97a1.27 1.27 0 00-1.197.848L678.87 139.15l-20.164-52.618a1.259 1.259 0 00-1.179-.813zm-38.368-.075h-17.263c-.696 0-1.264.568-1.264 1.265v75.312c0 .697.568 1.265 1.264 1.265h17.263c.696 0 1.265-.568 1.265-1.265V86.91c0-.697-.57-1.265-1.265-1.265m-8.543-34.292c-6.839 0-12.388 5.536-12.388 12.374 0 6.843 5.549 12.386 12.388 12.386 6.836 0 12.38-5.543 12.38-12.386 0-6.838-5.544-12.374-12.38-12.374m151.936 41.783H729.9v4.033h3.163c1.578 0 2.52-.772 2.52-2.017 0-1.313-.942-2.016-2.52-2.016m2.049 5.753l3.437 4.811h-2.897l-3.093-4.412h-2.66v4.412h-2.424V90.95h5.685c2.963 0 4.912 1.515 4.912 4.066 0 2.09-1.208 3.368-2.96 3.873m-2.693-12.184c-6.222 0-10.931 4.947-10.931 11.004 0 6.054 4.675 10.935 10.868 10.935 6.22 0 10.935-4.944 10.935-11.004 0-6.055-4.68-10.935-10.872-10.935m-.063 23.154c-6.832 0-12.148-5.487-12.148-12.15 0-6.662 5.385-12.212 12.21-12.212 6.833 0 12.149 5.486 12.149 12.143 0 6.664-5.382 12.219-12.211 12.219'
              fill='#ffffff'
            />
          </svg>
        </div>
      </header>
      <div className='p-8 bg-gradient-to-b from-[#191919] to-black'>
        <div className='flex justify-center'>
          <div className='border border-black w-[45rem] rounded-lg bg-black'>
            <h1 className='text-center mt-16 text-[45px] font-bold text-white'>
              Log in to Spotify
            </h1>
            <div className='py-10'>
              {/* Sign in with Google */}
              <div className='flex justify-center mb-2.5'>
                <button className='flex border border-gray-400 hover:border-white rounded-full py-3 px-[20px]'>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 48 48'
                      width='24px'
                      height='24px'
                    >
                      <path
                        fill='#FFC107'
                        d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                      />
                      <path
                        fill='#FF3D00'
                        d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                      />
                      <path
                        fill='#4CAF50'
                        d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                      />
                      <path
                        fill='#1976D2'
                        d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-200 font-bold mx-10'>
                    Continue with Google
                  </p>
                </button>
              </div>
              {/* Sign in with Facebook */}
              <div className='flex justify-center mb-2.5'>
                <button className='flex border border-gray-400 hover:border-white rounded-full py-3 px-[18px]'>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 48 48'
                      width='24px'
                      height='24px'
                    >
                      <path
                        fill='#039be5'
                        d='M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z'
                      />
                      <path
                        fill='#fff'
                        d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-200 font-bold mx-8'>
                    Continue with Facebook
                  </p>
                </button>
              </div>
              {/* Sign in with Apple */}
              <div className='flex justify-center mb-2.5'>
                <button className='flex border border-gray-400 hover:border-white rounded-full py-3 px-4'>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      viewBox='0,0,256,256'
                      width='24px'
                      height='24px'
                    >
                      <g
                        fill='#ffffff'
                        fillRule='nonzero'
                        stroke='none'
                        strokeWidth={1}
                        strokeLinecap='butt'
                        strokeLinejoin='miter'
                        strokeMiterlimit={10}
                        strokeDasharray=''
                        strokeDashoffset={0}
                        fontFamily='none'
                        fontWeight='none'
                        fontSize='none'
                        textAnchor='none'
                        style={{ mixBlendMode: 'normal' }}
                      >
                        <g transform='scale(5.12,5.12)'>
                          <path d='M44.52734,34.75c-1.07812,2.39453 -1.59766,3.46484 -2.98437,5.57813c-1.94141,2.95313 -4.67969,6.64063 -8.0625,6.66406c-3.01172,0.02734 -3.78906,-1.96484 -7.87891,-1.92969c-4.08594,0.01953 -4.9375,1.96875 -7.95312,1.9375c-3.38672,-0.03125 -5.97656,-3.35156 -7.91797,-6.30078c-5.42969,-8.26953 -6.00391,-17.96484 -2.64844,-23.12109c2.375,-3.65625 6.12891,-5.80469 9.65625,-5.80469c3.59375,0 5.85156,1.97266 8.82031,1.97266c2.88281,0 4.63672,-1.97656 8.79297,-1.97656c3.14063,0 6.46094,1.71094 8.83594,4.66406c-7.76562,4.25781 -6.50391,15.34766 1.33984,18.31641zM31.19531,8.46875c1.51172,-1.94141 2.66016,-4.67969 2.24219,-7.46875c-2.46484,0.16797 -5.34766,1.74219 -7.03125,3.78125c-1.52734,1.85938 -2.79297,4.61719 -2.30078,7.28516c2.69141,0.08594 5.47656,-1.51953 7.08984,-3.59766z' />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p className='text-gray-200 font-bold mx-12'>
                    Continue with Apple
                  </p>
                </button>
              </div>
              {/* Sign in with phone number */}
              <div className='flex justify-center'>
                <button className='flex border border-gray-400 hover:border-white rounded-full py-3'>
                  <p className='text-gray-200 font-bold mx-[43px]'>
                    Continue with phone number
                  </p>
                </button>
              </div>
              <hr className='w-3/4 text-center ml-24 mt-10 border-1'></hr>
            </div>
            <div className='flex justify-center mx-auto'>
              <div className='text-center'>
                <label
                  htmlFor='usernameOrEmail'
                  className='text-white block text-left mb-2 font-bold'
                >
                  <span>Email or username </span>
                </label>
                <input
                  value='nguyenvanngoc11082000@gmail.com'
                  type='text'
                  id='usernameOrEmail'
                  className='bg-[#121212] w-80 h-11 text-white p-2 border border-gray-400 rounded-md hover:border-white focus:border-4 focus:outline-none'
                  placeholder='Username or email'
                />
                <label
                  htmlFor='usernameOrEmail'
                  className='text-white block text-left mb-2 mt-4 font-bold'
                >
                  <span>Password</span>
                </label>
                <div className='relative'>
                  {showPassword == true ? (
                    <span className='absolute top-2.5 right-2'>
                      <svg
                        width='25px'
                        height='25px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        cursor='pointer'
                        onClick={handleTogglePassword}
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
                            d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12'
                            stroke='#ffffff'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />{' '}
                          <path
                            d='M1 12C1 12 5 20 12 20C19 20 23 12 23 12'
                            stroke='#ffffff'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />{' '}
                          <circle
                            cx={12}
                            cy={12}
                            r={3}
                            stroke='#ffffff'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />{' '}
                        </g>
                      </svg>
                    </span>
                  ) : (
                    <span className='absolute top-2.5 right-2'>
                      <svg
                        width='25px'
                        height='25px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        onClick={handleTogglePassword}
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
                            d='M2 2L22 22'
                            stroke='#ffffff'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />{' '}
                          <path
                            d='M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335'
                            stroke='#ffffff'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />{' '}
                          <path
                            d='M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818'
                            stroke='#ffffff'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />{' '}
                        </g>
                      </svg>
                    </span>
                  )}
                  <input
                    value='Ngocn986'
                    type={showPassword ? 'password' : 'text'}
                    id='usernameOrEmail'
                    className='bg-[#121212] w-80 h-11 text-white p-2 border border-gray-400 rounded-md hover:border-white focus:border-4 focus:outline-none'
                    placeholder='Password'
                  ></input>
                  {/* Remember me */}
                  <div className='text-left mt-4'>
                    <Switch
                      style={{
                        backgroundColor: stateSwitch ? '#1ed760' : '#ccc',
                        minWidth: '2.5rem',
                        height: '1.3rem',
                      }}
                      onChange={handleSwitchRemember}
                    ></Switch>
                    <span className='text-white font-mono mx-5 my-1.5'>
                      Remember me
                    </span>
                  </div>
                </div>
                <div className='py-8'>
                  <button
                    onClick={handleLogin}
                    className='bg-[#1ed760] rounded-full py-2.5 px-[120px]  transform hover:scale-[1.1]'
                  >
                    <p className='font-bold text-black'>Login</p>
                  </button>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <a className='text-white underline hover:text-[#1ed760]'>
                Forgot your password?
              </a>
            </div>
            <hr className='w-3/4 text-center ml-24 my-10 border-1'></hr>
            <div className='text-center font-mono mb-20'>
              <p className='text-white'>
                Don&apos;t have an account?{' '}
                <a className='underline hover:text-[#1ed760]'>
                  Sign up for Spotify
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
