import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>MAMALUCRELLI Records Inc. - Only Pure Trash 100% </title>
      </Helmet>
      <h1>MAMALUCRELLI Records</h1>
      <h2>CINQUANTA SFUMATURE DI CONTE - Trentesimo capitolo OUT NOW!</h2>
      <p>
        <img src="/src/images/WebBackGround.png" />
        
      </p>
      <br />
      <h2>You discover this great album in:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
