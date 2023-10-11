import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as P from "../pages";

export default function Router() {
    const navigate = useNavigate();

    useEffect(() => {

    }, [navigate]);

    return (
        <Routes>
            {/* <Route path="" element={ } /> */}
        </Routes>
    )
}