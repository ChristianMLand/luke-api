import { Routes, Route } from 'react-router-dom';
import HomeDisplay from './views/HomeDisplay';
import InfoDisplay from './views/InfoDisplay';
import ErrorDisplay from './views/ErrorDisplay';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <HomeDisplay /> }>
        <Route path=":type/:id" element={ <InfoDisplay/> } />
        <Route path="*" element={ <ErrorDisplay/> } />
      </Route>
    </Routes>
  );
}

export default App;
