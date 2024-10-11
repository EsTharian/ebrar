'use client';

import { useState } from 'react';
import Menu from './menu';

const BurgerMenu = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="relative">
      <button className="p-2" type="button" onClick={() => setHidden((prev) => !prev)}>
        <span className="sr-only">Menüyü aç</span>
        <span className="icon-[mdi--menu] w-6 h-6" />
      </button>
      <Menu hidden={hidden} setHidden={setHidden} />
    </div>
  );
};

export default BurgerMenu;
