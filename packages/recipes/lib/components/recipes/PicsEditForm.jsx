/*

A component to configure the "edit recipe" form.

*/

import React from 'react';
import { Components, registerComponent, getFragment } from "meteor/vulcan:core";

import Recipes from '../../modules/recipes/collection.js';

const PicsEditForm = ({documentId, closeModal}) =>

  <Components.SmartForm
    collection={Recipes}
    documentId={documentId}
    mutationFragment={getFragment('PicsDetailsFragment')}
    showRemove={true}
    successCallback={document => {
      closeModal();
    }}
  />

registerComponent({ name: 'PicsEditForm', component: PicsEditForm });
