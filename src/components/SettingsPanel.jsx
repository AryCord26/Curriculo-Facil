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
      {/* Toggle do modo escuro */}
      <div
        className="theme-toggle"
        role="switch"
        aria-pressed={theme === 'dark'}
        tabIndex={0}
        onClick={toggleDarkMode}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleDarkMode();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          marginBottom: '1rem',
          gap: '0.5rem',
        }}
      >
        <span>☀️</span>
        <div
          style={{
            width: '50px',
            height: '24px',
            borderRadius: '12px',
            backgroundColor: theme === 'dark' ? '#333' : '#ccc',
            position: 'relative',
            transition: 'background-color 0.3s ease',
          }}
        >
          <div
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              position: 'absolute',
              top: '1px',
              left: theme === 'dark' ? '26px' : '2px',
              transition: 'left 0.3s ease',
            }}
          />
        </div>
        <span>🌙</span>
      </div>

      <section>
        <h2>Personalize seu currículo</h2>

        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Cor principal:
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginTop: '0.4rem', padding: '0.3rem', width: '100%' }}
          >
            {Object.entries(cores).map(([nome, hex]) => (
              <option key={nome} value={hex}>{nome}</option>
            ))}
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Fonte:
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            style={{ marginTop: '0.4rem', padding: '0.3rem', width: '100%' }}
          >
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
