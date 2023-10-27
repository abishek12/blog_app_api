import Express from "express";
import controller from '../controller/AuthController.js';

const appRoutes = Express.Router();

appRoutes.post('/register', controller.registerUser);
appRoutes.post('/login', controller.loginUser);
appRoutes.post('/reset-password/', controller.resetPassword);

export default appRoutes;