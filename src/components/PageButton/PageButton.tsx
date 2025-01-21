import React from 'react';
import { NavLink, useLocation } from 'react-router';
import cn from 'classnames';

interface Props {
  page: string[];
}

export const PageButton: React.FC<Props> = ({ page }) => {
  const location = useLocation();

  return (
    <NavLink
      className={cn(
        'w-[200px] h-[48px] flex justify-center items-center border border-[#C4C4C4]',
        {
          'bg-[#C4C4C4]':
            page[1] === location.pathname ||
            (page[1] === '/users' &&
              location.pathname === '/'),
        }
      )}
      to={`${page[1]}`}
    >
      {page[0]}
    </NavLink>
  );
};
