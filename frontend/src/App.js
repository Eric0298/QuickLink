import React from 'react';
import AppNavbar from './components/AppNavbar';
import UrlForm from './components/UrlForm';
import ShortendUrl from './components/ShortendUrl';
import VisitStats from './components/VisitStats';
import UrlHistory from './components/UrlHistory';
import StatsTable from './components/StatsTable';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <AppNavbar />
      <div className="container mt-5">
        <UrlForm />
        <ShortendUrl />
        <VisitStats />
        <UrlHistory />
        <StatsTable />
      </div>
    </>
  );
}

export default App;
