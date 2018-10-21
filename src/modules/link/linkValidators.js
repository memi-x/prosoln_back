import { body } from 'express-validator/check';

export const validateLinkBody = [
  body('url', 'Link must be a valid URL').isURL(),
  body('title', 'Title of link posted cannot be empty')
    .isString()
    .not()
    .isEmpty(),
  body('access')
    .trim()
    .withMessage('Specify the accessibility of your link')
    .not()
    .isEmpty()
    .isIn(['public', 'private'])
    .withMessage('Accessibility can be "public", "private"'),
  body('category', 'Category cannot be empty')
    .not()
    .isEmpty(),
  body('problem', 'Problem faced should be specified')
    .not()
    .isEmpty(),
  body('solution', 'Solution solved cannot be empty')
    .not()
    .isEmpty()
];
