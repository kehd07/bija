import React from 'react';
import { registerComponent, withCurrentUser } from 'meteor/vulcan:core';

const About = ({currentUser}) => {
  return (
    <div>
      We are watering the seeds of reflection to explain you what we are about.
    </div>
  );
};

registerComponent({ name: 'About', component: About, hocs: [withCurrentUser] });
