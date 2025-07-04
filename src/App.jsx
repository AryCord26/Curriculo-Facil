import React, { useState, useEffect } from 'react';
import './styles/App.css';

import BasicInfoForm from './components/BasicInfoForm';
import ObjectiveForm from './components/ObjectiveForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import CoursesForm from './components/CoursesForm';
import CertificatesForm from './components/CertificatesForm';
import SkillsForm from './components/SkillsForm';
import LanguagesForm from './components/LanguagesForm';
import KnowledgeForm from './components/KnowledgeForm';

import SettingsPanel from './components/SettingsPanel';
import ResumePreview from './components/ResumePreview';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    linkedin: '',
    dataNascimento: '',
    disponibilidadeMudanca: false,
    disponibilidadeViagem: false,
    objetivo: '',

    formacoes: [{ curso: '', instituicao: '', anoConclusao: '' }],
    experienciasProfissionais: [{ empresa: '', cargo: '', periodo: '', descricao: '' }],
    cursos: [{ nome: '', instituicao: '', ano: '', imagem: null }],
    certificados: [{ nome: '', emissor: '', ano: '', imagem: null }],
    habilidades: '',

    idiomas: {
      ingles: 'Nenhum',
      espanhol: 'Nenhum',
      frances: 'Nenhum',
      outrosIdiomas: [],
    },

    conhecimentos: {
      pacoteOffice: 'Nenhum',
      outros: '',
    },
  });

  // Personalização visual
  const [color, setColor] = useState('#4a90e2');
  const [font, setFont] = useState("'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.style.setProperty('--cor-principal', color);
    document.documentElement.style.setProperty('--fonte-principal', font);

    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [color, font, theme]);

  // Atualiza campos simples (string, boolean)
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Atualiza cursos no estado (passado para CoursesForm)
  const setCursos = (cursos) => {
    setFormData(prev => ({ ...prev, cursos }));
  };

  // Atualiza certificados no estado (passado para CertificatesForm)
  const setCertificados = (certificados) => {
    setFormData(prev => ({ ...prev, certificados }));
  };

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <h1>Crie seu primeiro currículo</h1>

      <SettingsPanel
        color={color}
        setColor={setColor}
        font={font}
        setFont={setFont}
        theme={theme}
        setTheme={setTheme}
      />

      <BasicInfoForm formData={formData} updateField={updateField} />
      <ObjectiveForm formData={formData} updateField={updateField} />
      <EducationForm formData={formData} setFormData={setFormData} />
      <ExperienceForm formData={formData} setFormData={setFormData} />

      <CoursesForm cursos={formData.cursos} setCursos={setCursos} />
      <CertificatesForm certificados={formData.certificados} setCertificados={setCertificados} />

      <SkillsForm formData={formData} updateField={updateField} />
      <LanguagesForm formData={formData} setFormData={setFormData} />
      <KnowledgeForm formData={formData} setFormData={setFormData} />

      <ResumePreview data={formData} />
    </div>
  );
}

export default App;
