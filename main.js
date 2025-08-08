import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Received info: ${name} and ${email}`);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/form.html`);
});
