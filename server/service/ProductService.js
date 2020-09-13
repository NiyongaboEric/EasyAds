import uploadImage from '../Helpers/files/upload.Image';
import Query from './Query';
import { Product, Category } from '../database/models';
import Response from '../Helpers/Response';
import { productNotFound, newProductAdded } from '../constant/message';

class ProductService {
  static async addProduct(req, res) {
    const {
      body,
      authUser: { id: userId },
    } = req;

    const input = {
      ...body,
      userId,
    };
    const query = {
      where: {
        id: body.categoryId,
      },
    };
    const isCategory = await Query.findOne(Category, query);
    if (!isCategory) {
      Response.commonError(req, res, 400, productNotFound);
    }
    input.categoryId = isCategory.dataValues.id;
    const image = await uploadImage(req, res);
    const { secure_url: img } = image;
    input.image = img;
    const result = await Query.create(Product, input);
    Response.commonSuccess(req, res, 201, newProductAdded, result);
  }
}

export default ProductService;
