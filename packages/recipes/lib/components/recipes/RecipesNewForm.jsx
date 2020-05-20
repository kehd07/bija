import React from 'react';
import {Components, registerComponent, getFragment, withAccess} from 'meteor/vulcan:core';

import Recipes from '../../modules/recipes/collection.js';

const RecipesNewForm = ({currentUser, closeModal}) => (
  <div>
    <Components.SmartForm
      collection={Recipes}
      mutationFragment={getFragment('RecipesItemFragment')}
      successCallback={closeModal}
    />
  </div>
);

const accessOptions = {
  groups: ['admins'],
};

registerComponent({name: 'RecipesNewForm', component: RecipesNewForm, hocs: [[withAccess, accessOptions]]});
