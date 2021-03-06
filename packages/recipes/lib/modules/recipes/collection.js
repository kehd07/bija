import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import '../permissions.js';

const Recipes = createCollection({
  collectionName: 'Recipes',
  typeName: 'Recipe',
  schema,
  resolvers: getDefaultResolvers('Recipes'),
  mutations: getDefaultMutations('Recipes'),
});

Recipes.addDefaultView(() => {
  return {
    options: {sort: {createdAt: -1}}
  };
});

export default Recipes;
