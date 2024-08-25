const express = require('express');
const qualityMetricsRoutes = require('./routes/qualityMetrics'); // Import the route

const app = express();
const port = 3000;

app.use(express.json());
app.use(qualityMetricsRoutes); 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
