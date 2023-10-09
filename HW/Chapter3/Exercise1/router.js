const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    const query = req.query;
    res.send(Object.keys(query).map(k => `${k}: ${query[k]}`).join('\n'));
});
router.post('/', (req, res) => {
    const body = req.body;
    res.send(Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n'));
});
router.put('/', (req, res) => {
    const body = req.body;
    res.send(Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n'));
});
router.delete('/', (req, res) => {
    const body = req.body;
    res.send(Object.keys(body).map(k => `${k}: ${body[k]}`).join('\n'));
});

module.exports = router;
