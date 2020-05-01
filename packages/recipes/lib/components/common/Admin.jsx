import React from 'react';
import { registerComponent, Components, withCurrentUser } from 'meteor/vulcan:core';
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

const Admin = ({results = [], currentUser, loading}) => {
  return (
    <div>
      {currentUser ?
        <NavLoggedIn currentUser={currentUser}/> :
        <NavLoggedOut currentUser={currentUser}/>
      }
    </div>
  );
};

registerComponent({ name: 'Admin', component: Admin, hocs: [withCurrentUser] });
