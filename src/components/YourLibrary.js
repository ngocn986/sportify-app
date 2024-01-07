import React from 'react';
import BtnCreatePlaylist from './BtnCreatePlaylist';
import BrowsePodcast from './BrowsePodcast';
function YourLibrary() {
  return (
    <div>
      <div className='bg-[#121212] h-[800px] rounded-lg'>
        <div className='py-4 px-6 flex justify-around '>
          <button className='flex-grow flex gap-2'>
            <svg
              width='30px'
              height='30px'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
              fill='#000000'
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
                  fill='var(--ci-primary-color, #a7a7a7)'
                  d='M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z'
                  className='ci-primary'
                />{' '}
                <path
                  fill='var(--ci-primary-color, #a7a7a7)'
                  d='M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z'
                  className='ci-primary'
                />{' '}
                <path
                  fill='var(--ci-primary-color, #a7a7a7)'
                  d='M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z'
                  className='ci-primary'
                />{' '}
              </g>
            </svg>
            <span className='font-bold py-1 text-[#b2b2b2] hover:text-white'>
              Your library
            </span>
          </button>
          <button>
            <svg
              width='30px'
              height='30px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
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
                  d='M4 12H20M12 4V20'
                  stroke='#a7a7a7'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='hover:stroke-white'
                />{' '}
              </g>
            </svg>
          </button>
        </div>
        <div className='bg-[#242424] rounded-lg mx-4 p-4'>
          <p className='font-bold text-white font-sans'>
            Create your first playlist
          </p>
          <p className='text-white text-sm font-mono py-2'>
            It&apos;s easy, we&apos;ll help you
          </p>
          <BtnCreatePlaylist></BtnCreatePlaylist>
        </div>
        <div className='bg-[#242424] rounded-lg mx-4 p-4 mt-4'>
          <p className='font-bold text-white font-sans'>
            Let&apos;s find some podcasts to follow
          </p>
          <p className='text-white text-sm font-mono py-2'>
            We&apos;ll keep you updated on new episodes
          </p>
          <BrowsePodcast></BrowsePodcast>
        </div>
        <div className='flex flex-wrap justify-around text-[0.7rem] text-[#8c8c8c] p-4 gap-2 mt-52 mb-10'>
          <span>Legal</span>
          <span>Privacy Center</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
          <span>About Ads</span>
          <span>Accessibility</span>
          <span>Cookies</span>
          <span>Accessibility Policy</span>
        </div>
        <div className='mx-4'>
          <button className='border flex border-white rounded-2xl text-[#8c8c8c] font-bold gap-2 py-2 px-2 hover:scale-105'>
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
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
                  d='M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L22 12Z'
                  stroke='#ffffff'
                  strokeWidth='1.5'
                />{' '}
                <path
                  d='M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12L16 12Z'
                  stroke='#ffffff'
                  strokeWidth='1.5'
                />{' '}
                <path
                  d='M2 12H22'
                  stroke='#ffffff'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />{' '}
              </g>
            </svg>
            <span className='text-sm text-white'>English</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default YourLibrary;
