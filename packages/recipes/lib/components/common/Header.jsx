import React from 'react';
import Button from '@material-ui/core/Button';
import {registerComponent, Components, withCurrentUser, Loading} from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const NavLoggedIn = ({currentUser}) => {
  return (
    <div className="header-nav header-logged-in">
      <div className="header-accounts">

        Welcome,&nbsp;

        <Components.ModalTrigger label={Users.getDisplayName(currentUser)} size="small">
          <div>
            {Users.isAdmin(currentUser) ? <p>Admin</p> : null}
            <Components.AccountsLoginForm />
          </div>
        </Components.ModalTrigger>

      </div>

      <Components.ShowIf check={() => Users.canDo(currentUser, 'recipes.new')}>
        <Components.ModalTrigger label="Upload">
          <Components.PicsNewForm />
        </Components.ModalTrigger>
      </Components.ShowIf>
    </div>
  )};

// navigation bar component when the user is logged out

const NavLoggedOut = ({currentUser}) => {
  return (
    <div className="header-nav header-logged-out">
      <Components.ModalTrigger label="Sign Up/Log In" size="small">
        <Components.AccountsLoginForm />
      </Components.ModalTrigger>
    </div>
  );
};

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
          <img src="/packages/recipes/lib/static/spices_021.jpg" alt="Bija"/>
          <div>
            <h1><strong>B&#x12B;ja</strong></h1>
            <strong>Kitchen</strong>
          </div>
        </Button>
        {currentUser ?
          <NavLoggedIn currentUser={currentUser}/> :
          <NavLoggedOut currentUser={currentUser}/>
        }
      </div>
      <NavMenu/>
    </div>
  )

};

registerComponent({ name: 'Header', component: Header, hocs: [withCurrentUser ] });
