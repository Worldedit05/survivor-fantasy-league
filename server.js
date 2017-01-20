import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});
