import { addRoute } from 'meteor/vulcan:core';

addRoute({ name: 'home', path: '/', componentName: 'RecipesList' });
addRoute({ name: 'recipes', path: '/recipes', componentName: 'RecipesList' });
addRoute({ name: 'blog', path: '/blog', componentName: 'Blog' });
addRoute({ name: 'about', path: '/about', componentName: 'About' });
addRoute({ name: 'admin', path: '/admin-bk', componentName: 'Admin' });
