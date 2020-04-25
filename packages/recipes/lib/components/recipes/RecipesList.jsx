import React from 'react';
import { registerComponent, Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';
import Button from '@material-ui/core/Button';
import Recipes from '../../modules/recipes/collection.js';

const RecipesList = ({results = [], currentUser, loading}) => {
  return (
    <div>
      <Button>Spring</Button>
      <Button>Summer</Button>
      <Button>Fall</Button>
      <Button>Winter</Button>
    </div>
  );
};


const options = {
  collection: Recipes,
  fragmentName: 'RecipesItemFragment',
  limit: 10
};

registerComponent({ name: 'RecipesList', component: RecipesList, hocs: [withCurrentUser, [withList, options]] });
