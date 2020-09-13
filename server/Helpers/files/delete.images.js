import fs from 'fs';
import path from 'path';

// eslint-disable-next-line arrow-body-style
const deleteFiles = () => {
  return fs.readdir('./uploads', (err, files) => {
    if (files.length > 0) {
      files.forEach((file) => {
        fs.unlink(path.join('uploads', file), (errorFile) => {
          if (errorFile) throw err;
        });
      });
    }
  });
};

export default deleteFiles;
