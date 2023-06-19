import Express from 'express';
import controller from '../controller/user.js';

const appRoutes = Express.Router();

appRoutes.get('/', controller.fetchUsers);
appRoutes.get('/:id', controller.fetchUser);
appRoutes.put('/', controller.updateUser);
appRoutes.delete('/', controller.deleteUser);

export default appRoutes;