import Express from 'express';
import controller from './controller.js';

const appRoutes = Express.Router();

appRoutes.get('/', controller.fetchCategories);
appRoutes.get('/:id', controller.fetchCategory);
appRoutes.post('/', controller.postCategory);
appRoutes.put('/', controller.updateCategory);
appRoutes.delete('/', controller.deleteCategory);

export default appRoutes;