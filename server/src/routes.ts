import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
/**
* Get: Buscar ou listar uma informação...
* Post: Criar alguma nova informação...
* Put: Atualizar uma informação existente...
* Delete: Deletar uma informação existente...
*
* Corpo (Request Body): Dados para criação ou atualizaçao de um registro...
* Route Params: (Identificar qual recurso a ser atualiizado ou deletado)
* Query Params: (Paginação, filtros, ordenação)
*/

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;