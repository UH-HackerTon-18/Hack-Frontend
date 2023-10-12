import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as P from '../pages';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/:id/chat' element={<P.Chat />} />
                <Route path='/avatar' element={<P.CreateAvatar />} />
                <Route path="/avatar/:id/detail" element={<P.AvatarDetail />} />
            </Routes>
        </BrowserRouter>
    );
}
