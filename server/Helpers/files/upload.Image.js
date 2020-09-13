import cloudinary from '../../config/cloudinary';
import removeFiles from './delete.images';

const upload = async (req, res) => {
  const image = await cloudinary.uploader.upload(req.file.path, (error, result) => {
    if (error) {
      return res.status(500).json({
        status: 500,
        message: 'Server can not handle image',
      });
    }
    return result;
  });
  removeFiles();
  return image;
};

export default upload;
