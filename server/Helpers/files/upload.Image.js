import cloudinary from '../../config/cloudinary';
import { imageNotUploaded } from '../../constant/message';
import Response from '../Response';

const upload = async (req, res) => {
  const image = await cloudinary.uploader.upload(req.file.path, (error, result) => {
    if (error) {
      Response.commonError(req, res, 500, imageNotUploaded);
    }
    return result;
  });
  return image;
};

export default upload;
