import { Link } from '../../models';

class LinkController {
  static async addLink(req, res) {
    const newLink = new Link();
    newLink.title = req.body.title;
    newLink.url = req.body.url;
    newLink.category = req.body.category;
    newLink.problem = req.body.problem;
    newLink.solution = req.body.solution;
    newLink.access = req.body.access;
    newLink.save(error => {
      if (error) {
        res.send(error);
      }
      res.status(201).send({ message: 'Successfully added a link' });
    });
  }
  static async getLinks(req, res) {
    Link.find((error, links) => {
      if (error) {
        res.send(error);
      }
      res.status(200).send({
        success: true,
        message: 'Links retrieved successfully',
        links
      });
    });
  }
}

export default LinkController;
