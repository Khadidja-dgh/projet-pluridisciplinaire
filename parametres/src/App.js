import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Parametre from './Parametre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/parametre" />} />
        <Route path="/parametre" element={<Parametre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

