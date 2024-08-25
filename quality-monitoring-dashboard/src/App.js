import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/quality-metrics')
      .then(response => {
        setMetrics(response.data);
      })
      .catch(error => console.error('Error fetching metrics:', error));
  }, []);

  return (
    <div className="App">
      <h1>Code Quality Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Complexity</th>
            <th>Bugs</th>
            <th>Technical Debt</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, index) => (
            <tr key={index}>
              <td>{metric.repository_name}</td>
              <td>{metric.complexity_score}</td>
              <td>{metric.bugs}</td>
              <td>{metric.technical_debt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
