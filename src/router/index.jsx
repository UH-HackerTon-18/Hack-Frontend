import Header from 'components/Header';
import CheckPersonal from 'pages/CheckPersonal';
import CreateAvartar from 'pages/CreateAvatar';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as P from '../pages';

export default function Router() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/avatar' element={<CheckPersonal />} />
        <Route path='/createAvartar' element={<CreateAvartar />} />
        <Route path='avatar/:id/chat' element={<P.Chat />} />
        <Route path="avatar/:id" element={<P.AvatarDetail />} />
        <Route path="/avatar/chat/:id_1/:id_2" element={<P.AvatarChat />} />
      </Routes>
    </BrowserRouter>
  );

}
