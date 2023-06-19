import Express from "express";
import controller from '../controller/AuthController.js';

const appRoutes = Express.Router();

appRoutes.post('/register', controller.registerUser);
appRoutes.post('/login', controller.loginUser);

export default appRoutes;