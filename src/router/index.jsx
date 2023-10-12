import Header from 'components/Header';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as P from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='avatar/:id/chat' element={<P.Chat />} />
        <Route path='avatar/:id' element={<P.AvatarDetail />} />
        <Route path='/avatar/chat/:id_1/:id_2' element={<P.AvatarChat />} />
        <Route path='/' element={<P.LandingPage />} />
        <Route path='/completeAvartar:id' element={<P.CheckPersonal />} />
        <Route path='/createAvartar' element={<P.CreateAvartar />} />
      </Routes>
    </BrowserRouter>
  );
}
