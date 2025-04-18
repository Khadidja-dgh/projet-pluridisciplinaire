import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import Signup from './signup/signup';
import Login from './login/login';
import Alerts from './AlertPage/alerts';
import ModuleManagement from './pages/ModuleManagement';
import Commentaires from './pages/Commentaires'; // Assurez-vous que Commentaires est importé ici
import Sidebar from './components/Sidebar';

// 🎬 Wrapper pour animer les transitions de page
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') || 'chef departement';
    setRole(storedRole);
  }, []);

  const handleRoleChange = (newRole) => {
    localStorage.setItem('userRole', newRole);
    setRole(newRole);
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route
          path="/login"
          element={
            <PageWrapper>
              <Login />
            </PageWrapper>
          }
        />

        <Route
          path="/signup"
          element={
            <PageWrapper>
              <Signup />
            </PageWrapper>
          }
        />

        <Route
          path="/alerts"
          element={
            <PageWrapper>
              <Alerts />
            </PageWrapper>
          }
        />

        <Route
          path="/modules"
          element={
            <PageWrapper>
              <ModuleManagement role={role} onRoleChange={handleRoleChange} />
            </PageWrapper>
          }
        />

        {/* Route pour la page Commentaires */}
        <Route
          path="/commentaires"
          element={
            role === 'chef departement' ? (
              <PageWrapper>
                <Commentaires />
              </PageWrapper>
            ) : (
              <Navigate to="/modules" replace /> // Redirige si ce n'est pas chef departement
            )
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
