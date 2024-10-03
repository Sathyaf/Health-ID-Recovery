const express = require('express');
const router = express.Router();

let storedShares = {}; // Simulated in-memory storage

router.post('/recover-share', (req, res) => {
    const { holderAddress } = req.body;
    const encryptedShare = storedShares[holderAddress];
    if (encryptedShare) {
        return res.json({ message: `Recovered share: ${encryptedShare}` });
    }
    return res.json({ message: 'No share found for this address.' });
});

module.exports = router;
