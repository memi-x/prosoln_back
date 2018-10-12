import Router from '../routerSetup';
import LinkController from './linkController';
import { validateLinkBody } from './linkValidators';

Router.post('/link', validateLinkBody, LinkController.addLink);

export default Router;
