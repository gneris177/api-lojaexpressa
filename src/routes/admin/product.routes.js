import { Router } from 'express';
import ProductController from '../../controllers/admin/ProductController.js';

const router = Router();

const productController = new ProductController();

router.get('/admin/product/:page/limit/:limit', productController.pageIndex);
router.post('/admin/product/create', productController.create);
router.put('/admin/product/:productId', productController.update);
router.delete(
  '/admin/product/deleteImage/:imageId/productId/:productId',
  productController.deleteImage
);
router.post(
  '/admin/product/updateImage/productId/:productId',
  productController.updateImage
);

export default router;
