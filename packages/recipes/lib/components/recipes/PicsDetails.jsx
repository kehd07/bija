/*

A component that shows a detailed view of a single picture.
Wrapped with the "withDocument" container.

*/

import React from 'react';
import Recipes from '../../modules/recipes/collection.js';
import { registerComponent, Components, withDocument } from 'meteor/vulcan:core';

const PicsDetails = ({loading, document, currentUser}) => {

  if (loading) {

    return <p>Loading…</p>

  } else {

    return (

      <div className="recipes-details">

        <div className="recipes-details-image"><img src={document.imageUrl}/></div>

        <div className="recipes-details-sidebar">

          <div className="recipes-info">

            <h4 className="recipes-author">{document.user.displayName}</h4>

            <div className="recipes-body">

              {document.body}

              {currentUser && Recipes.options.mutations.edit.check(currentUser, document) ?
                <Components.ModalTrigger component={<Components.Icon name="edit"/>}>
                  <Components.PicsEditForm currentUser={currentUser} documentId={document._id} />
                </Components.ModalTrigger>
                : null
              }

            </div>

          </div>

        </div>

      </div>

    )
  }
}

const options = {
  collection: Recipes,
  fragmentName: 'PicsDetailsFragment',
};

registerComponent({ name: 'PicsDetails', component: PicsDetails, hocs: [[withDocument, options]] });
