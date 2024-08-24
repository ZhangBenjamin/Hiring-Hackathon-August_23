import React, { useEffect, useState } from 'react';

const CommitList = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch('/api/commits')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Make sure the response is in JSON format
      })
      .then((data) => setCommits(data))
      .catch((error) => console.error('Error fetching commits:', error));
  }, []);
  

  return (
    <div>
      <h1>Commits</h1>
      <ul>
        {commits.map((commit) => (
          <li key={commit.id}>
            {commit.message} - {commit.author} on {new Date(commit.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommitList;