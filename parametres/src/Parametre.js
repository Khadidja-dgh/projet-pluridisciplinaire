import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Assure-toi que le chemin est correct
import './Parametre.css';

const Parametre = () => {
  const [alertesActives, setAlertesActives] = useState(true);
  const [emailsAutomatiques, setEmailsAutomatiques] = useState(true);
  const [modeAffichage, setModeAffichage] = useState('listes');

  const handleSave = () => {
    alert('Paramètres enregistrés !');
  };

  const handleResetAffectations = () => {
    alert('Affectations réinitialisées !');
  };

  const handleReset = () => {
    alert('Paramètres réinitialisés !');
  };

  const handleTestAlertes = () => {
    alert('Test des alertes lancé !');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="parametre-container">
        <h1>Paramètres</h1>

        <section>
          <h2>Notifications</h2>
          <div className="switch-container">
            <label>
              <input
                type="checkbox"
                checked={alertesActives}
                onChange={() => setAlertesActives(!alertesActives)}
              />
              <span className="slider"></span>
              Activer alertes de dépassement d'heures
            </label>
          </div>
          <div className="switch-container">
            <label>
              <input
                type="checkbox"
                checked={emailsAutomatiques}
                onChange={() => setEmailsAutomatiques(!emailsAutomatiques)}
              />
              <span className="slider"></span>
              Envoyer des emails automatiques aux enseignants
            </label>
          </div>
        </section>

        <section>
          <h2>Affichage de l'organigramme</h2>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="listes"
                checked={modeAffichage === 'listes'}
                onChange={(e) => setModeAffichage(e.target.value)}
              />
              Listes
            </label>
            <label>
              <input
                type="radio"
                value="arborescence"
                checked={modeAffichage === 'arborescence'}
                onChange={(e) => setModeAffichage(e.target.value)}
              />
              Arborescence
            </label>
            <label>
              <input
                type="radio"
                value="grille"
                checked={modeAffichage === 'grille'}
                onChange={(e) => setModeAffichage(e.target.value)}
              />
              Grille
            </label>
          </div>

          <div className="couleurs-specialite">
            <div><span className="dot informatique"></span> Informatique</div>
            <div><span className="dot ia"></span> IA</div>
            <div><span className="dot reseaux"></span> Réseaux</div>
            <div><span className="dot orangex"></span> Orangex</div>
          </div>
        </section>

        <div className="buttons">
          <button onClick={handleResetAffectations}>RÉINITIALISER LES AFFECTATIONS</button>
          <div className="button-row">
            <button onClick={handleReset}>RÉINITIALISER</button>
            <button onClick={handleTestAlertes}>TESTER LES ALERTES</button>
          </div>
          <button className="save-btn" onClick={handleSave}>ENREGISTRER LES PARAMÈTRES</button>
        </div>
      </div>
    </div>
  );
};

export default Parametre;