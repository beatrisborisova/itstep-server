const router = require('express').Router();
const Item = require('../models/Item');

router.get('/items', async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const items = await Item.findById(id);
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/items', async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.put('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body)
        if (!item) {
            return res.status(404).json({ message: `Cannot find product with id - ${id}` })
        }
        const updated = await Item.findById(id);
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.delete('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByIdAndDelete(id)
        if (!item) {
            return res.status(404).json({ message: `Cannot find product with id - ${id}` })
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = router;
