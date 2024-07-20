import multer from "multer";

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    // Get the file extension
    const [filename, extension] = file.originalname.split(".");

    // Generate a unique filename with the current timestamp and extension
    const uniqueFilename = `${Date.now()}.${extension}`;

    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

export default upload;
