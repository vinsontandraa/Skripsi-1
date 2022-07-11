import * as React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Popular from "./components/Popular";
import AppUrl from "./components/AppUrl";

function App() {
  return (
    <main className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/app-url" element={<AppUrl />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
