// src/App.jsx
import React, { useState } from 'react';
import './styles/App.css';
import BasicInfoForm from './components/BasicInfoForm';
import ObjectiveForm from './components/ObjectiveForm';
import ResumePreview from './components/ResumePreview';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    linkedin: '',
    objetivo: '',
  });

  return (
    <div className="app-container">
      <h1>Crie seu primeiro currículo</h1>
      <BasicInfoForm formData={formData} setFormData={setFormData} />
      <ObjectiveForm formData={formData} setFormData={setFormData} />
      <ResumePreview data={formData} />
    </div>
  );
}

export default App;
