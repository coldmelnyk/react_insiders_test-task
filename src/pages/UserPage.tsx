import React from 'react';

interface Props {
  page: string;
}

export const UserPage: React.FC<Props> = ({ page }) => {
  return <div className="p-[80px] pt-[60px] border border-black">
    <h2 className='text-center font-[500] text-2xl tracking-[6px] mb-[40px]'>{page}</h2>
  </div>;
};
