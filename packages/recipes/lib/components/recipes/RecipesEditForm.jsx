import React from 'react';
import {Components, registerComponent, getFragment} from "meteor/vulcan:core";

import Recipes from '../../modules/recipes/collection.js';

const RecipesEditForm = ({documentId, closeModal}) =>

  <Components.SmartForm
    collection={Recipes}
    documentId={documentId}
    mutationFragment={getFragment('RecipesDetailsFragment')}
    showRemove={true}
    successCallback={document => {
      closeModal();
    }}
  />

registerComponent({name: 'RecipesEditForm', component: RecipesEditForm});
