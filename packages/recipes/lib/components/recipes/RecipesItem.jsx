import React from 'react';
import {registerComponent} from 'meteor/vulcan:core';
import {Link} from 'react-router-dom';

const RecipesItem = ({recipe, currentUser}) => {
  return (
    <Link className='recipes-item' to={'recipes/' + recipe._id}>
      <div className='recipes-image'>
        <img src={recipe.mainImage}/>
      </div>
      <div className='recipes-meta'>{recipe.name}</div>
    </Link>
  );
};

registerComponent({name: 'RecipesItem', component: RecipesItem});
