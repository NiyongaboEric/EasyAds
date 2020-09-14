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

  static async getProduct(req, res) {
    try {
      const result = await ProductService.getProduct(req, res);
      return result;
    } catch (err) {
      return err;
    }
  }

  static async getSpecificProduct(req, res) {
    try {
      const result = await ProductService.getSpecificProduct(req, res);
      return result;
    } catch (err) {
      return err;
    }
  }

  static async getOwnersProduct(req, res) {
    try {
      const result = await ProductService.getOwnersProduct(req, res);
      return result;
    } catch (err) {
      return err;
    }
  }

  static async markProduct(req, res) {
    try {
      const result = await ProductService.markProduct(req, res);
      return result;
    } catch (err) {
      return err;
    }
  }
}

export default ProductController;
