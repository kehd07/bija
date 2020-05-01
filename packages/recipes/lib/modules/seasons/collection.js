import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import '../permissions.js';

const Seasons = createCollection({
  collectionName: 'Seasons',
  typeName: 'Season',
  schema,
  resolvers: getDefaultResolvers('Seasons'),
  mutations: getDefaultMutations('Seasons'),
});

Seasons.addDefaultView(() => {
  return {
    options: {sort: {createdAt: -1}}
  };
});

export default Seasons;
