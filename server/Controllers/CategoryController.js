import CategoryService from '../service/CategoryService';

class CategoryController {
  static async addCategory(req, res) {
    try {
      const result = await CategoryService.addCategory(req, res);
      return result;
    } catch (err) {
      return err;
    }
  }

  static async getCategory(req, res) {
    try {
      const result = await CategoryService.getCategory(req, res);
      return result;
    } catch (err) {
      return err;
    }
  }
}

export default CategoryController;
