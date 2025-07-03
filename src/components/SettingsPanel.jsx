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

  return (
    <section>
      <h2>Personalize seu currículo</h2>

      <label>
        Cor principal:
        <select value={color} onChange={e => setColor(e.target.value)}>
          {Object.entries(cores).map(([nome, hex]) => (
            <option key={nome} value={hex}>{nome}</option>
          ))}
        </select>
      </label>

      <label>
        Fonte:
        <select value={font} onChange={e => setFont(e.target.value)}>
          {Object.entries(fontes).map(([nome, css]) => (
            <option key={nome} value={css}>{nome}</option>
          ))}
        </select>
      </label>

      <label style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleDarkMode} />
        Modo Escuro
      </label>
    </section>
  );
}

export default SettingsPanel;
