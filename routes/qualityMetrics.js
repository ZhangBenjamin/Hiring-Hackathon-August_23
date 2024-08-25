const express = require('express');
const CodeQualityMetric = require('../models/CodeQualityMetric');

const router = express.Router();

router.get('/api/quality-metrics', async (req, res) => {
  try {
    const metrics = await CodeQualityMetric.findAll();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
