const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for shares
let storedShares = {}; // Key: holderAddress, Value: shareData

// Root route
app.get('/', (req, res) => {
    res.send('HealthID Recovery System API is running!');
});

// POST route for storing share data
app.post('/api/share/store', (req, res) => {
    const { holderAddress, shareData } = req.body; // Get both holderAddress and shareData

    // Validate inputs
    if (!holderAddress || !shareData) {
        return res.status(400).json({ message: 'Holder address and share data are required.' });
    }

    // Store share data in memory
    storedShares[holderAddress] = shareData;

    // Log for debugging
    console.log('Share data received:', { holderAddress, shareData });

    // Respond back to the client
    res.json({ message: 'Share stored successfully!' });
});

// POST route for recovering share data
app.post('/api/share/recover', (req, res) => {
    const { holderAddress } = req.body; // Get the holder address from the request body

    // Validate inputs
    if (!holderAddress) {
        return res.status(400).json({ message: 'Holder address is required.' });
    }

    // Recover the share data based on the holder address
    const recoveredShareData = storedShares[holderAddress];
    
    if (recoveredShareData) {
        return res.json({ 
            message: 'Share recovered successfully!', 
            data: { holderAddress, shareData: recoveredShareData }
        });
    }
    
    return res.status(404).json({ message: 'No share found for this address.' }); // Handle not found case
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
