import { createRoot } from 'react-dom/client';
import './index.css';
import { Root } from './Root';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={{ pt: Tailwind }}>
    <Root />
  </PrimeReactProvider>
);
