import Users from 'meteor/vulcan:users';

const membersActions = [
  'recipes.new',
  'recipes.edit.own',
  'recipes.remove.own',
];
Users.groups.members.can(membersActions);

const adminActions = [
  'recipes.edit.all',
  'recipes.remove.all'
];
Users.groups.admins.can(adminActions);
