/*

Register the GraphQL fragment used to query for data

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment RecipesItemFragment on Recipe {
    _id
    createdAt
    userId
    user {
      displayName
    }
    imageUrls
  }
`);

registerFragment(/* GraphQL */`
  fragment RecipesDetailsFragment on Recipe {
    _id
    createdAt
    userId
    user {
      displayName
    }
    imageUrls
    body
  }
`);

registerFragment(/* GraphQL */`
  fragment RecipesMinimalFragment on Recipe {
    _id
    body
  }
`);
