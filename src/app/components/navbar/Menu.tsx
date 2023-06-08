'use client';

import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import ImgLogo from '../ImgLogo';
import MenuItem from './MenuItem';

const Menu = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = useCallback(() => {
    setIsShow((prevState) => !prevState);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Your Home
        </div>
        <div
          onClick={toggleShow}
          className="p-4 md:py-1 md:px-2 border-[1px] bg-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <ImgLogo />
          </div>
        </div>
      </div>
      {isShow && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" />
              <MenuItem label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;