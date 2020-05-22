/*

Register the GraphQL fragment used to query for data

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment RecipesItemFragment on Recipe {
    _id
    name
    mainImage
  }
`);

registerFragment(/* GraphQL */`
  fragment RecipesDetailsFragment on Recipe {
    _id
    name
    mainImage
    body
  }
`);
