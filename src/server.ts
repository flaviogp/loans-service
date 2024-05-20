import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.json({ name: 'flavio Gomes' }))

app.listen('3003', () => {

    console.log(`running at http://localhost:3003`)
})
