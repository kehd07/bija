import React from 'react';
import { registerComponent, Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';
import Recipes from '../../modules/recipes/collection.js';

const Home = ({results = [], currentUser, loading}) => {
  return (
    <div className="recipes-list">
      {loading ?
        <Loading /> :
        <div className="recipes-list-content">
          <div className="recipes-list-grid">
            {results.map(recipe => <Components.RecipesItem key={recipe._id} recipe={recipe} currentUser={currentUser} />)}
          </div>
        </div>
      }
    </div>
  );
};


const options = {
  collection: Recipes,
  fragmentName: 'RecipesItemFragment',
  limit: 3
};

registerComponent({ name: 'Home', component: Home, hocs: [withCurrentUser, [withList, options]] });
