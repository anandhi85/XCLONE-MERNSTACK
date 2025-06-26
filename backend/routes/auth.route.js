import express from "express"
<<<<<<< HEAD
import { signup} from "../controllers/auth.controller.js";
=======
import { signup, login, logout} from "../controllers/auth.controller.js";
>>>>>>> 224a8e23ece0379af4389fa9e5b07f4196dd46f3

const router = express.Router();

router.post ("/signup",  signup)
<<<<<<< HEAD
//  router.post ("/login",  login)
//  router.post ("/logout",  logout)
=======
 router.post ("/login",  login)
 router.post ("/logout",  logout)
>>>>>>> 224a8e23ece0379af4389fa9e5b07f4196dd46f3


export default router;