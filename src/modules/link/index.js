import Router from '../routerSetup';
import LinkController from './linkController';
import { validateLinkBody } from './linkValidators';

Router.post('/links', validateLinkBody, LinkController.addLink);
Router.get('/links', LinkController.getLinks);

export default Router;
