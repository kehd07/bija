/*

The main Recipes collection definition file.

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';

const Recipes = createCollection({

  collectionName: 'Recipes',

  typeName: 'Recipe',

  schema,

  resolvers: getDefaultResolvers('Recipes'),

  mutations: getDefaultMutations('Recipes'),

});

/*

Set a default results view whenever the Recipes collection is queried:

- Recipes are sorted by their createdAt timestamp in descending order

*/

Recipes.addDefaultView(terms => {
  return {
    options: {sort: {createdAt: -1}}
  };
});

export default Recipes;
