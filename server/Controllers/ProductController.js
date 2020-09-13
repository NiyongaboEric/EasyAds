import ProductService from '../service/ProductService';
import { newProductNotAdded } from '../constant/message';

class ProductController {
  static async addProduct(req, res) {
    try {
      const result = await ProductService.addProduct(req, res);
      return result;
    } catch (err) {
      Response.commonError(req, res, 500, newProductNotAdded, err);
    }
  }
}

export default ProductController;
