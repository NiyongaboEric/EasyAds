import ProductService from '../service/ProductService';

class ProductController {
  static async addProduct(req, res) {
    try {
      const result = await ProductService.addProduct(req, res);
      return result;
    } catch (err) {
      return err;
    }
  }
}

export default ProductController;
