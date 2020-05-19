import React from 'react';
import Button from '@material-ui/core/Button';
import {registerComponent, Components, withCurrentUser, Loading} from 'meteor/vulcan:core';

const NavMenu = ({results = [], currentUser, loading}) => {
  return (
    <div>
      {loading ? <Loading/> :
        <div className={'header-menu'}>
            <Button href={'/recipes'}>Recipes</Button>
            <Button href={'/blog'}>Blog</Button>
          <Button href={'/about'}>About</Button>
        </div>
      }
    </div>
  );
};

// Header component

const Header = ({currentUser}) => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <Button className="logo" href={'/'}>
          <img src="/packages/recipes/lib/static/banner.png" alt="Bija"/>
        </Button>
      </div>
      <NavMenu/>
    </div>
  )

};

registerComponent({ name: 'Header', component: Header });
