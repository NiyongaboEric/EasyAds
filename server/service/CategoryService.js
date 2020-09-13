import Query from './Query';
import { Category } from '../database/models';
import Response from '../Helpers/Response';
import { newCategoryAdded, allCategoryFetched } from '../constant/message';

class CategoryService {
  static async addCategory(req, res) {
    const {
      body,
    } = req;

    const newCategory = await Query.create(Category, body);
    Response.commonSuccess(req, res, 201, newCategoryAdded, newCategory.dataValues);
  }

  static async getCategory(req, res) {
    const newCategory = await Query.findAll(Category, {});
    Response.commonSuccess(req, res, 200, allCategoryFetched, newCategory);
  }
}

export default CategoryService;
