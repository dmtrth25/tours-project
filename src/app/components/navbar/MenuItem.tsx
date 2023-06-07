'use client';

import { FC } from 'react';

interface IMenuItem {
  label: string;
}

const MenuItem: FC<IMenuItem> = ({ label }) => {
  return <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">{label}</div>;
};

export default MenuItem;
