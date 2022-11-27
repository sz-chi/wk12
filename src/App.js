import React from "react";
import Article from "./pages/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import DataFetching from "./pages/DataFetching";

function App() {
  return (
    <div className="App">
      {<BrowserRouter>
        <Routes>
          <Route path="/" element={<DataFetching />} />
          <Route path="/Article/:articleId" element={<Article />} />
          <Route path="/Article" element={<Article />} />
        </Routes>
      </BrowserRouter> }
    </div>
  );
}

export default App;
