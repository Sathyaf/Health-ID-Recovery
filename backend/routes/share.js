const express = require('express');
const router = express.Router();

let storedShares = {}; // Simulated in-memory storage

router.post('/login', (req, res) => {
    const { holderAddress } = req.body;
    // Simulate successful login for any non-empty address
    if (holderAddress) {
        return res.json({ success: true });
    }
    return res.json({ success: false, message: 'Invalid address' });
});

router.post('/store-share', (req, res) => {
    const { holderAddress, encryptedShare } = req.body;
    storedShares[holderAddress] = encryptedShare; // Simulated storage
    return res.json({ message: 'Share stored successfully!' });
});

module.exports = router;
