import uploadImage from '../Helpers/files/upload.Image';
import Query from './Query';
import { Product, Category } from '../database/models';
import Response from '../Helpers/Response';
import {
  productNotFound,
  newProductAdded,
  allProductFetched,
  specificProductFetched,
  noOwnerProduct,
  productNotBelongToOwner,
  productAlreadyMarked,
  productMarkedSuccess,
  noActivityPerformed,
} from '../constant/message';

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

  static async getProduct(req, res) {
    const allProduct = await Query.findAll(Product, {});
    Response.commonSuccess(req, res, 200, allProductFetched, allProduct);
  }

  static async getSpecificProduct(req, res) {
    const query = {
      where: req.params,
    };
    const fetchProduct = await Query.findOne(Product, query);
    if (!fetchProduct) {
      Response.commonError(req, res, 422, productNotFound);
    }
    Response.commonSuccess(req, res, 200, specificProductFetched, fetchProduct);
  }

  static async getOwnersProduct(req, res) {
    const query = {
      where: {
        userId: req.authUser.id,
      },
    };
    const allProduct = await Query.findAll(Product, query);
    if (allProduct.length === 0) {
      Response.commonSuccess(req, res, 200, noOwnerProduct, allProduct);
    }
    Response.commonSuccess(req, res, 200, allProductFetched, allProduct);
  }

  static async markProduct(req, res) {
    const { query: queryInput, params: paramsInput, authUser } = req;
    const query = {
      where: {
        id: paramsInput.id,
      },
    };
    const isProductId = await Query.findOne(Product, query);
    if (!isProductId) {
      Response.commonError(req, res, 400, productNotFound);
    }

    const isOwnerProduct = authUser.id === isProductId.dataValues.userId;
    if (!isOwnerProduct) {
      Response.commonError(req, res, 403, productNotBelongToOwner);
    }

    if (queryInput.status) {
      const isAlreadyMarked = isProductId.dataValues.status === 'sold';
      if (isAlreadyMarked) {
        Response.commonSuccess(req, res, 200, productAlreadyMarked, isProductId.dataValues);
      }
      const statusQuery = [
        {
          status: queryInput.status,
        },
        {
          where: {
            id: isProductId.dataValues.id,
          },
          returning: true,
        },
      ];
      const updateStatus = await Query.update(Product, statusQuery);
      Response.commonSuccess(req, res, 200, productMarkedSuccess, updateStatus[1][0].dataValues);
    }
    Response.commonError(req, res, 500, noActivityPerformed);
  }
}

export default ProductService;
