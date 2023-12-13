const express = require('express');
const router = express.Router();
const schoolpenController = require('../controllers/schoolpenController'); // Adjust the path accordingly

// Define routes for schoolpenTypes
router.get('/schoolpenTypes', schoolpenController.getAllSchoolpenTypes);
router.post('/schoolpenTypes', schoolpenController.createSchoolpenType);
router.get('/schoolpenTypes/:id', schoolpenController.getOneSchoolpenType);
router.put('/schoolpenTypes/:id', schoolpenController.updateSchoolpenType);
router.delete('/schoolpenTypes/:id', schoolpenController.deleteSchoolpenType);

module.exports = router;
