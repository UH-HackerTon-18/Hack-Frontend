import Header from 'components/Header';
import CheckPersonal from 'pages/CheckPersonal';
import CreateAvartar from 'pages/CreateAvatar';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as P from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<CheckPersonal />} />
        <Route path='/createAvartar' element={<CreateAvartar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
