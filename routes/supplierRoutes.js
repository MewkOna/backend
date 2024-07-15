const Router = require('koa-router');
const router = new Router();
const { getSuppliers, addSupplier, deleteSupplier } = require('../controllers/supplierController');

router.get('/suppliers', getSuppliers);
router.post('/suppliers', addSupplier);
router.delete('/suppliers/:id', deleteSupplier);

module.exports = router;