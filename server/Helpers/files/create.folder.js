import fs from 'fs';
import path from 'path';

// eslint-disable-next-line arrow-body-style
const isDirExist = (dir) => {
  return fs.mkdir(dir, (err) => {
    if (err) {
      return err;
    }
  });
};

const createDirectory = () => {
  const tempDir = path.resolve(__dirname, '../../');
  const imgDir = path.join(tempDir, 'uploads');
  isDirExist(imgDir);
  return imgDir;
};

export default createDirectory;
