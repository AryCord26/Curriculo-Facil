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
    <>
      {/* Toggle do modo escuro no canto superior direito */}
      <div className="theme-toggle" onClick={toggleDarkMode} aria-label="Alternar tema claro/escuro" role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggleDarkMode(); }}>
        <span className="icon sun">☀️</span>
        <span className={`toggle-switch ${theme === 'dark' ? 'dark' : 'light'}`}></span>
        <span className="icon moon">🌙</span>
      </div>

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
      </section>
    </>
  );
}

export default SettingsPanel;
