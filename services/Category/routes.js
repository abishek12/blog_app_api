import Express from 'express';
import controller from './controller.js';

const appRoutes = Express.Router();

appRoutes.get('/', controller.fetchContacts);
appRoutes.get('/:id', controller.fetchContact);
appRoutes.post('/', controller.postContact);
appRoutes.put('/', controller.updateContact);
appRoutes.delete('/', controller.deleteContact);

export default appRoutes;