import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";

// controllers
import { create, hotels, image, sellerHotels } from "../controllers/home";

router.post("/create-hotel", formidable(), create);
router.get("/hotels", hotels);
router.get("/hotel/image/:hotelId", image);
router.get("/seller-hotel", sellerHotels);

module.exports = router;
