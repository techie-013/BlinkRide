const Transport = require('../models/Transport');

exports.updateTransportLocation = async (req, res) => {
    const { type, vehicleId, lat, lon } = req.body;

    try {
        const transport = await Transport.findOneAndUpdate(
            { vehicleId },
            { type, currentLocation: { lat, lon }, lastUpdated: new Date() },
            { upsert: true, new: true }
        );

        res.status(200).json({ success: true, transport });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};