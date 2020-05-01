import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import '../permissions.js';

const Categories = createCollection({
  schema,
  collectionName: 'Categories',
  typeName: 'Category',
  resolvers: getDefaultResolvers('Categories'),
  mutations: getDefaultMutations({typeName: 'Category', collectionName: 'Categories'}),
});

Categories.addDefaultView(() => {
  return {
    options: {sort: {createdAt: -1}}
  };
});

export default Categories;
