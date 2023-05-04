import express from 'express';
import {
  changeContent,
  create,
  update,
  deletePageRecord,
  details,
  list,
  loadContent,
} from './page.controller';

const pageRoute = express.Router();
pageRoute.post('/', create);
pageRoute.post('/api/:pageId/content', changeContent);

pageRoute.put('/api/:pageId', update);

pageRoute.delete('/:pageId', deletePageRecord);

pageRoute.get('/api/:pageId', details);
pageRoute.get('/', list);
pageRoute.get('/api/:pageId/content', loadContent); 

export default pageRoute;
