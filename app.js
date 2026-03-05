const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Running on port 3000'));
}
