import Users from 'meteor/vulcan:users';

const adminActions = [
  'recipes.new',
  'recipes.edit.all',
  'recipes.remove.all'
];
Users.groups.admins.can(adminActions);
