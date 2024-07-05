import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://backend:5000/') // Ensure this URL is correct
      .then(response => response.json())
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
