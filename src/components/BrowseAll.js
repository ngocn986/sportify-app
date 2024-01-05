import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CategoriesService from '../services/CategoriesService';
import Footer from './footer';
function BrowseAll() {
  const [categories, setCategories] = useState([]);
  const services = new CategoriesService();
  const [randomColors, setRandomColors] = useState([]);

  const getCategories = async () => {
    try {
      let response = await services.getCategories();
      setCategories(response.data.categories.items);

      const randomColorsArray = Array.from(
        { length: response.data.categories.items.length },
        getRandomColor
      );
      setRandomColors(randomColorsArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getRandomColor = () => {
    const colors = [
      '#006450',
      '#00ff00',
      '#8400e7',
      '#1e3264',
      '#dc148c',
      '#ba5d07',
      '#27856a',
      '#a56752',
      '#148a08',
      '#8e66ac',
      '#e13300',
      '#777777',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <>
      <div className='bg-gradient-to-b from-[#1f1f1f] to-black h-[785px] rounded-b-lg overflow-auto'>
        <header>
          <p className='text-white font-bold text-3xl pt-5 px-5 font-sans hover:underline'>
            Browse all
          </p>
        </header>
        <div className='flex flex-wrap gap-5 ml-12 mt-5'>
          {categories &&
            categories.map((item, i) => (
              <NavLink key={i} to={`/genre/${item.id}&${item.name}&${getRandomColor()}`}>
                <div
                  className='cursor-pointer hover:scale-105 duration-500 image-category relative h-[187px] w-[187px]  rounded-lg overflow-hidden'
                  style={{ backgroundColor: getRandomColor() }}
                >
                  <p className='text-white font-bold text-2xl py-3 px-3'>
                    {item.name}
                  </p>
                  {item.icons.map((icon, i) => (
                    <img
                      key={i}
                      className='absolute -right-10 -bottom-4 rotate-[25deg]'
                      width={133}
                      height={133}
                      src={icon.url}
                      alt='Image'
                    />
                  ))}
                </div>
              </NavLink>
            ))}
        </div>
        <div className='mx-5'>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default BrowseAll;
