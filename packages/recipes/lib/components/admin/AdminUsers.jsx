import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const AdminUsers = ({currentUser}) => (
  <div className="admin-users">
    <Components.AdminLogin/>
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

registerComponent({ name: 'AdminUsers', component: AdminUsers, hocs: [withCurrentUser] });

export default AdminUsers;
