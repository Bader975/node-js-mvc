import express from "express";
import { validate } from "../middleware/validate";
import { protect} from "../middleware/auth";
import { userVaild} from "../zod.schema/user.zod";
import { Login, main, newLogin} from "../controllers/user.controller";
let router = express.Router();


router.get('/', main)
router.get('/login', newLogin)
router.get('/home', (req, res) => {
res.render('home')
})

// router.post('/login',validate(userlogin), Login)
router.post('/userlogin', Login)
// router.post('/user/login',validate(userVaild), Login)





export default router;