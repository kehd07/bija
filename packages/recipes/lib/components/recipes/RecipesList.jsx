import React from 'react';
import {registerComponent, Components, withList, withCurrentUser, Loading} from 'meteor/vulcan:core';
import Recipes from '../../modules/recipes/collection.js';
import Users from 'meteor/vulcan:users';

const RecipesList = ({results = [], currentUser, loading}) => {
  return (
    <div className="recipes-list">
      {loading ?
        <Loading /> :
        <div>
          <div className="top-actions">
            <Components.ShowIf check={() => Users.canDo(currentUser, 'recipes.new')}>
              <Components.ModalTrigger label="Create New Recipe">
                <Components.RecipesNewForm />
              </Components.ModalTrigger>
            </Components.ShowIf>
          </div>
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
  limit: 10
};

registerComponent({name: 'RecipesList', component: RecipesList, hocs: [withCurrentUser, [withList, options]]});
