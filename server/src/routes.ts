import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControler = new ClassesController();
const connectionsControler = new ConnectionsController();

routes.get('/classes', classesControler.index);
routes.post('/classes', classesControler.create);

routes.get('/connections', connectionsControler.index);
routes.post('/connections', connectionsControler.create);

export default routes;
