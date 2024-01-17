// routes/loanRoutes.js
const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.post('/', loanController.create);
router.get('/:id', loanController.getLoan);
router.get('/', loanController.getAllLoans);
router.put('/:id', loanController.updateLoan);
router.delete('/:id', loanController.deleteLoan);

module.exports = router;
