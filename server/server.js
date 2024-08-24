const express = require('express');
const { Commit, CodeQualityMetric, Issue } = require('../models');

const app = express();
app.use(express.json());

// Define routes for fetching code quality data
app.get('/api/commits', async (req, res) => {
  try {
    const commits = await Commit.findAll();
    res.json(commits);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching commits.' });
  }
});

app.get('/api/code-quality', async (req, res) => {
  try {
    const metrics = await CodeQualityMetric.findAll({ include: Commit });
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching code quality metrics.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
