import React, { useState, useEffect } from 'react';
import './App.css';
import Voeux from './voeux';

function App() {
  const [voeux, setVoeux] = useState([]);

  useEffect(() => {
    // Ajout d’un voeu par défaut à l’entrée
    setVoeux([{ module: '', teachingTypes: [] }]);
  }, []);

  const addVoeu = () => {
    if (voeux.length >= 3) return;
    const nouveauVoeu = { module: '', teachingTypes: [] };
    setVoeux([nouveauVoeu, ...voeux]); // ajoute au-dessus
  };

  const updateVoeu = (index, updated) => {
    const newVoeux = [...voeux];
    newVoeux[index] = updated;
    setVoeux(newVoeux);
  };

  const deleteVoeu = (index) => {
    const newVoeux = voeux.filter((_, i) => i !== index);
    setVoeux(newVoeux);
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <button className="back-btn">← Retour</button>
        {voeux.length < 3 && (
          <button className="add-btn" onClick={addVoeu}>
            + Nouveau vœu
          </button>
        )}
      </div>

      <h1>Liste de Voeux</h1>
      <p>Gérez vos souhaits d’enseignement pour l’année à venir</p>

      {voeux.map((voeu, index) => (
        <Voeux
          key={index}
          index={index}
          voeu={voeu}
          updateVoeu={updateVoeu}
          deleteVoeu={deleteVoeu}
        />
      ))}
    </div>
  );
}

export default App;