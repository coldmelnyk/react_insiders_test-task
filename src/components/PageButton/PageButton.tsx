import React from 'react';
import { NavLink } from 'react-router';
import { useLocation } from 'react-router';
import cn from 'classnames';

interface Props {
  page: string[];
}

export const PageButton: React.FC<Props> = ({ page }) => {
  const location = useLocation().pathname;

  return (
    <NavLink
      className={cn(
        'w-[200px] h-[48px] flex justify-center items-center border border-[#C4C4C4]',
        {
          'bg-[#C4C4C4]': location === page[1]
        }
      )}
      to={`${page[1]}`}
    >
      {page[0]}
    </NavLink>
  );
};
