import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Player from "./pages/Player";

import Players from "./pages/Players";

export default function () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Players />} />
                <Route path="/novo" element={<Player />} />
                <Route path="/:id" element={<Player />} />
            </Routes>
        </BrowserRouter>
    )
}