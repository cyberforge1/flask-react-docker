// /frontend/src/HomePage.tsx

import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://backend:5000';
    console.log('Base URL:', baseUrl);  // Add this line to debug
    fetch(`${baseUrl}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <h1>Welcome to My React App</h1>
        <p>{message}</p>
      </header>
    </div>
  );
};

export default HomePage;
