import React from 'react';
import './voeux.css';

const TeachingTypeSelector = ({ selectedTypes, onChange }) => {
  const types = ['Cours', 'TD', 'TP'];

  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      onChange(selectedTypes.filter(t => t !== type));
    } else {
      onChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="teaching-type">
      <label>Type d’enseignement :</label>
      <div className="type-buttons">
        {types.map(type => (
          <button
            key={type}
            className={`toggle-btn ${selectedTypes.includes(type) ? 'selected' : ''}`}
            onClick={() => toggleType(type)}
            type="button"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

const Voeux = ({ index, voeu, updateVoeu, deleteVoeu }) => {
  const handleChange = (e) => {
    updateVoeu(index, { ...voeu, [e.target.name]: e.target.value });
  };

  const handleTeachingTypeChange = (types) => {
    updateVoeu(index, { ...voeu, teachingTypes: types });
  };

  const handleDelete = () => {
    if (window.confirm('Voulez-vous vraiment supprimer ce vœu ?')) {
      deleteVoeu(index);
    }
  };

  return (
    <div className="voeu-form">
      <div className="voeu-header">
        <h3>Vœu {index + 1}</h3>
        <button className="delete-btn" onClick={handleDelete}>Supprimer</button>
      </div>

      <label>Nom du module :</label>
      <input
        type="text"
        name="module"
        placeholder="Entrez le nom du module"
        value={voeu.module}
        onChange={handleChange}
        className="module-input"
      />

      <TeachingTypeSelector
        selectedTypes={voeu.teachingTypes}
        onChange={handleTeachingTypeChange}
      />
    </div>
  );
};

export default Voeux;