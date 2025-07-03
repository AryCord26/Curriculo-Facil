// src/components/SettingsPanel.jsx
import React from 'react';

const cores = {
  Azul: '#4a90e2',
  Verde: '#27ae60',
  Laranja: '#e67e22',
  Roxo: '#8e44ad',
  Vermelho: '#c0392b',
};

const fontes = {
  'Segoe UI': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  Roboto: "'Roboto', sans-serif",
  Merriweather: "'Merriweather', serif",
  Arial: "Arial, sans-serif",
};

function SettingsPanel({ theme, setTheme, color, setColor, font, setFont }) {
  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2>Personalize seu currículo</h2>

      <label>
        Cor principal:
        <select value={color} onChange={handleColorChange}>
          {Object.entries(cores).map(([nome, hex]) => (
            <option key={nome} value={hex}>{nome}</option>
          ))}
        </select>
      </label>

      <label>
        Fonte:
        <select value={font} onChange={handleFontChange}>
          {Object.entries(fontes).map(([nome, css]) => (
            <option key={nome} value={css}>{nome}</option>
          ))}
        </select>
      </label>

      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleDarkMode}
        />
        Modo Escuro
      </label>
    </section>
  );
}

export default SettingsPanel;
