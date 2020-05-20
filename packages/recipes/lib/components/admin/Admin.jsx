import React from 'react';
import { registerComponent, Components, withCurrentUser } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const AdminUsers = ({currentUser}) => (
  <div className="admin-users">
    {Users.isAdmin(currentUser) ?
        <Components.Datatable
            collection={Users}
            columns={[
            {
                name: 'createdAt',
                sortable: true,
            },
            {
                name: 'displayName',
                sortable: true,
            },
            {
                name: 'email',
                sortable: true,
            },
            {
                name: 'isAdmin',
                filterable: true,
            },
            ]}
        /> : null
    }
  </div>
);

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
        <AdminUsers currentUser={currentUser}/> :
        <NavLoggedOut currentUser={currentUser}/>
      }
    </div>
  );
};

registerComponent({ name: 'Admin', component: Admin, hocs: [withCurrentUser] });
