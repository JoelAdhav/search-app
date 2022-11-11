require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const Ads = require('./models/Ads');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/ads', async (req, res) => {
    try {
        const search = req.query.search;

        const ads = await Ads.aggregate([
            { $match: { $text: { $search: search } } },
        ]);

        res.status(200).json(ads);
    } catch (err) {
        res.send(err);
    }
});

const PORT = 5000;

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() =>
        app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
    )
    .catch(error => console.log(error.message));

app.use;
