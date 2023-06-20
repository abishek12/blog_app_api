import Express from 'express';
import controller from './LikeController.js';

const appRoutes = Express.Router();


appRoutes.post('/', controller.createLike);
appRoutes.delete('/', controller.removeLike);

export default appRoutes;