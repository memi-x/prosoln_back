import { body } from 'express-validator/check';

export const validateLinkBody = [
  body('link')
    .not()
    .isEmpty()
    .withMessage('Link name cannot be empty')
    .isURL()
    .withMessage('Link must be a valid URL'),
  body('title', 'Title of link posted cannot be empty')
    .isString()
    .not()
    .isEmpty(),
  body('access')
    .trim()
    .withMessage('Specify the accessibility of your link')
    .not()
    .isEmpty()
    .isIn(['public', 'community', 'private'])
    .withMessage('Accessibility can be "public", "community", "private"')
];
