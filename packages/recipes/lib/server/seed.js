/*

Seed the database with some dummy content.

*/

import moment from 'moment';
import { Promise } from 'meteor/promise';
import Users from 'meteor/vulcan:users';
import { newMutation } from 'meteor/vulcan:core';
import Recipes from '../modules/recipes/collection.js';

const userName = 'DummyAdmin';
const dummyFlag = {
  fieldName: 'isDummy',
  fieldSchema: {
    type: Boolean,
    optional: true,
    hidden: true,
  },
};

Users.addField(dummyFlag);
Recipes.addField(dummyFlag);


const createRecipe = async (imageUrl, createdAt, description) => {
  const user = await Users.rawCollection().findOne({ username: userName });
  const recipe = {
    createdAt,
    imageUrls: [`http://vulcanjs.org/photos/${imageUrl}`],
    description,
    isDummy: true,
    userId: user._id,
  };

  return newMutation({
    collection: Recipes,
    document: recipe,
    currentUser: user,
    validate: false,
  });
};

const createUser = async (username, email) => {
  const user = {
    username,
    email,
    isDummy: true,
  };
  return newMutation({
    collection: Users,
    document: user,
    validate: false,
  });
};

const createDummyUsers = async () => {
  // eslint-disable-next-line no-console
  console.log('// inserting dummy users…');
  return Promise.all([
    createUser(userName, 'dummyuser@telescopeapp.org'),
  ]);
};

const createDummyRecipes = async () => {
  // eslint-disable-next-line no-console
  console.log('// creating dummy recipes…');
  return Promise.all([
    createRecipe('kaisendon.jpg', moment().subtract(20, 'days').toDate(), `This restaurant had the best kaisendon ever`, userName),
    createRecipe('cherry_blossoms.jpg', moment().toDate(), `Kyoto's cherry blossoms`, userName),
    createRecipe('koyo.jpg', moment().subtract(10, 'minutes').toDate(), `Red maple leaves during Fall.`, userName),
    createRecipe('cat.jpg', moment().subtract(3, 'hours').toDate(), `This cat was staring at me for some reason…`, userName),
  ]);
};

// eslint-disable-next-line no-undef
Vulcan.removeGettingStartedContent = () => {
  Users.remove({ 'profile.isDummy': true });
  Recipes.remove({ isDummy: true });
  // eslint-disable-next-line no-console
  console.log('// Getting started content removed');
};

Meteor.startup(() => {
  // insert dummy content only if there aren't any users or recipes
  if (!Users.find().count()) {
    Promise.await(createDummyUsers());
  }
  if (!Recipes.find().count()) {
    Promise.await(createDummyRecipes());
  }
});
