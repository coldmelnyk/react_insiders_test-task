import React from 'react';
import { NavLink } from 'react-router';

interface Props {
  page: string[];
}

export const PageButton: React.FC<Props> = ({ page }) => {
  return (
    <NavLink
      className={`w-[200px] h-[48px] flex justify-center items-center border border-[#C4C4C4]`}
      to={`${page[1]}`}
    >
      {page[0]}
    </NavLink>
  );
};
