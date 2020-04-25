import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const RecipesItem = ({recipe, currentUser}) => {
  return (
    <div className="recipes-item">
      <div className="recipes-image">
        <img src={recipe.imageUrl}/>
      </div>

      <div className="recipes-meta"/>
    </div>
  );
};

registerComponent({ name: 'RecipesItem', component: RecipesItem });
