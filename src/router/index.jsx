import Header from 'components/Header';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as P from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<P.LandingPage />} />
        <Route path='/completeAvartar' element={<P.CheckPersonal />} />
        <Route path='/createAvartar' element={<P.CreateAvartar />} />
        <Route path='/:id/chat' element={<P.Chat />} />
        <Route path='/avatar/:id/detail' element={<P.AvatarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
