import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';
import Project from './Project/Project.jsx';
import Authors from './Authors/Authors.jsx';
import Homepage from './Homepage/Homepage.jsx';

const App = () => (
  <>
    <div className="container">
      <header>
        <h2>Závěrečný projekt Digitální akademie Czechitas</h2>
      </header>
      <main>
        <nav>
          <Link to="/">Domů</Link>
          <Link to="/Project">Projekt</Link>
          <Link to="/Authors">Autorky</Link>
        </nav>
        <Outlet />
      </main>
      <div className="footer">
        <div className="footer__copyright">
          {' '}
          © 2022, Všechna práva vyhrazena
        </div>
        <div className="footer__copyright">
          {' '}
          Czechitas: Digitální akademie web 2022
        </div>
      </div>
    </div>
  </>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Homepage />} />
        <Route path="Project" element={<Project />} />
        <Route path="Authors" element={<Authors />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
