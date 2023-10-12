import Header from 'components/Header';
import CheckPersonal from 'pages/CheckPersonal';
import CreateAvartar from 'pages/CreateAvatar';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as P from '../pages';

export default function Router() {
<<<<<<< HEAD
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<CheckPersonal />} />
        <Route path='/createAvartar' element={<CreateAvartar />} />
      </Routes>
    </BrowserRouter>
  );
=======
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/:id/chat' element={<P.Chat />} />
                <Route path='/avatar' element={<P.CreateAvatar />} />
                <Route path="/avatar/:id/detail" element={<P.AvatarDetail />} />
            </Routes>
        </BrowserRouter>
    );
>>>>>>> 29c88b5c24c8a6257161ae5f2cf261343dfc398a
}
