import { Outlet } from 'react-router';
import { Header } from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <main className='py-[80px] px-[100px]'>
        <Outlet />
      </main>
    </>
  );
}
