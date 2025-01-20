import { PAGES } from '../../utils/constants';
import { PageButton } from '../PageButton';

export const Header = () => {
  return (
    <header
      className={
        'flex h-[88px] justify-center items-center gap-[20px] border-b-[1px] border-black'
      }
    >
      {Object.entries(PAGES).map(page => (
        <PageButton key={page[1]} page={page} />
      ))}
    </header>
  );
};
