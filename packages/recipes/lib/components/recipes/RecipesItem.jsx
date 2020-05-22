import React from 'react';
import {registerComponent} from 'meteor/vulcan:core';
import {Link} from 'react-router-dom';

const RecipesItem = ({recipe, currentUser}) => {
  return (
    <Link className='recipes-item' to={'recipes/' + recipe._id}>
      <img className='recipes-image' src={recipe.mainImage}/>
      <p>{recipe.name}</p>
      <div className='recipes-meta'/>
    </Link>
  );
};

registerComponent({name: 'RecipesItem', component: RecipesItem});
