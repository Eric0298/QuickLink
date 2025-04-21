// src/App.jsx
import React from 'react';
import AppNavbar from './components/AppNavbar';
import UrlForm from './components/UrlForm';
import ShortendUrl from './components/ShortendUrl';
import UrlHistory from './components/UrlHistory';
import VisitStats from './components/VisitStats';
import StatsTable from './components/StatsTable';
import './App.css';

const App = () => {
  // Ejemplo de URL generada (lo ideal sería que esto viniera de estado después del POST)
  const fakeShortUrl = 'https://sho.rt/xyz123';

  // Ejemplos de datos dummy para estadísticas
  const dummyMostVisited = [
    { id: 1, short_code: 'link1', visit_count: 124 },
    { id: 2, short_code: 'link2', visit_count: 111 },
    { id: 3, short_code: 'link3', visit_count: 100 },
    { id: 4, short_code: 'link4', visit_count: 78 },
    { id: 5, short_code: 'link5', visit_count: 65 },
  ];

  const dummyMostRecent = [
    { id: 6, short_code: 'link6', created_at: '2025-04-21' },
    { id: 7, short_code: 'link7', created_at: '2025-04-20' },
    { id: 8, short_code: 'link8', created_at: '2025-04-19' },
    { id: 9, short_code: 'link9', created_at: '2025-04-18' },
    { id: 10, short_code: 'link10', created_at: '2025-04-17' },
  ];

  return (
    <>
      <AppNavbar />
      <main className="container">
        <UrlForm />
        <ShortendUrl shortUrl={fakeShortUrl} />
        <UrlHistory />
        <VisitStats
          mostVisited={dummyMostVisited}
          mostRecent={dummyMostRecent}
        />
        <StatsTable />
      </main>
    </>
  );
};

export default App;
