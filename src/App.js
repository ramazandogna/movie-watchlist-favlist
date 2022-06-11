import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <did className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Watchlist />}></Route>
            <Route path="/watched" element={<Watched />}></Route>
            <Route path="/add" element={<Add />}></Route>
          </Routes>
        </BrowserRouter>
      </did>
    </GlobalProvider>
  );
}

export default App;
