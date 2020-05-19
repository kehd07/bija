import React from 'react';
import { registerComponent, Components, withCurrentUser } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const NavLoggedIn = ({currentUser}) => {
  return (
    <div>
      <div>
        <Components.ShowIf check={() => Users.canDo(currentUser, 'recipes.new')}>
          <Components.ModalTrigger label="Create New Recipe">
            <Components.PicsNewForm />
          </Components.ModalTrigger>
        </Components.ShowIf>
      </div>
    </div>
  )
};

const NavLoggedOut = ({currentUser}) => {
  return (
    <div className="header-nav header-logged-out">
      <Components.ModalTrigger label="Sign Up/Log In" size="small">
        <Components.AccountsLoginForm />
      </Components.ModalTrigger>
    </div>
  );
};

const AdminLogin = ({results = [], currentUser, loading}) => {
  return (
    <div>
      {currentUser ?
        <NavLoggedIn currentUser={currentUser}/> :
        <NavLoggedOut currentUser={currentUser}/>
      }
    </div>
  );
};

registerComponent({ name: 'AdminLogin', component: AdminLogin, hocs: [withCurrentUser] });
