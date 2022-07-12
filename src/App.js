import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import InfoDisplay from './Views/InfoDisplay';
import ErrorDisplay from './Views/ErrorDisplay';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SearchForm/> }>
          <Route path=":type/:id" element={ <InfoDisplay/> } />
          <Route path="*" element={ <ErrorDisplay/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
