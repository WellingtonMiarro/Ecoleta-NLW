import express from 'express';
const routes = express.Router();

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);



routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.delete('/points/:id', pointsController.delete);

export default routes;