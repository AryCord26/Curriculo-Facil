// src/App.jsx
import React from 'react';
import './styles/App.css';
import BasicInfoForm from './components/BasicInfoForm';

function App() {
  return (
    <div className="app-container">
      <h1>Crie seu primeiro currículo</h1>
      <BasicInfoForm />
    </div>
  );
}

export default App;
