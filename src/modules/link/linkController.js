import { Link } from '../../models';

class LinkController {
  static async addLink(req, res) {
    const newLink = new Link();
    newLink.link = req.body.link;
    newLink.title = req.body.title;
    newLink.category = req.body.category;
    newLink.subCategory = req.body.subCategory;
    newLink.problem = req.body.problem;
    newLink.solution = req.body.solution;
    newLink.access = req.body.access;
    newLink.hashTags = hashTags;
    const existingLink = await Link.findOne({ link: req.body.link });
    if (existingLink) {
      res.send({ message: 'The link already existing, please update it' });
      next();
    }
    newLink.save(error => {
      if (error) {
        res.send(error);
      }
      res.send({ message: 'Successfully added a link.' });
    });
  }
}

export default LinkController;
