/*

A component to configure the "new recipe" form.

We're using Recipes.options.mutations.new.check (defined in modules/recipes/mutations.js)
to check if the user has the proper permissions to actually insert a new picture.

*/

import React from 'react';
import { Components, registerComponent, getFragment, withAccess } from 'meteor/vulcan:core';

import Recipes from '../../modules/recipes/collection.js';

const PicsNewForm = ({currentUser, closeModal}) => (
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

registerComponent({ name: 'PicsNewForm', component: PicsNewForm, hocs: [[withAccess, accessOptions]] });
