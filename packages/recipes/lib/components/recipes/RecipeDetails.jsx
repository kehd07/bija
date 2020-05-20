import React from 'react';
import Recipes from '../../modules/recipes/collection.js';
import {registerComponent, Components, withDocument, withCurrentUser} from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const RecipeDetails = ({loading, document, currentUser}) => {
  if (loading) {
    return <p>Loading…</p>
  } else {
    return (
      <div className="recipes-details">
        <div className="recipes-details-image"><img src={document.mainImage}/></div>
        <div>
          <div className="recipes-info">
            <div className="recipes-body">
              <div>
                {Users.canDo(currentUser, 'recipes.edit') ?
                  <div style={{float: 'left', cursor: 'pointer'}}>
                    <Components.ModalTrigger component={<Components.Icon name='edit'/>}>
                      <Components.RecipesEditForm currentUser={currentUser} documentId={document._id}/>
                    </Components.ModalTrigger>
                  </div>
                  : null
                }
                <h1>{document.name}</h1>
              </div>
              <div>
                <p>{document.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const options = {
  collection: Recipes,
  fragmentName: 'RecipesDetailsFragment',
};

registerComponent({name: 'RecipeDetails', component: RecipeDetails, hocs: [withCurrentUser, [withDocument, options]]});
