import { useState, useEffect } from 'react';

function Header() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => {
        setQuote(`${data.content} — ${data.author}`);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <header>
      <h1>🗒️ Menedżer Zadań</h1>
      <p>{new Date().toLocaleDateString('pl-PL')}</p>
      {loading ? 'Ładowanie...' : <blockquote>{quote}</blockquote>}
    </header>
  );
}

export default Header;