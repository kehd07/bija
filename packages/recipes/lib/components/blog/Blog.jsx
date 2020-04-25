import React from 'react';
import { registerComponent, withCurrentUser } from 'meteor/vulcan:core';

const Blog = ({currentUser}) => {
  return (
    <div>
      We are seeding our blog, please come back later.
    </div>
  );
};

registerComponent({ name: 'Blog', component: Blog, hocs: [withCurrentUser] });
