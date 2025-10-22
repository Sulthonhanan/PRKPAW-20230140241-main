const express = require('express');
const router = express.Router();
const presensiController = require('../controllers/presensiController');
const { addUserData } = require('../middleware/permissionMiddleware');

// Middleware global di route presensi
router.use(addUserData);

// Rute presensi
router.post('/check-in', presensiController.CheckIn);
router.post('/check-out', presensiController.CheckOut);

module.exports = router;
