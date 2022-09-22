import express from "express";
import userController from "../controllers/user.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/users", userController.getAllUsers);
router.post("/users", upload.single("profile"), userController.createNewsUser);

export default router;
