import { addRoute } from 'meteor/vulcan:core';

addRoute({ name: 'home', path: '/', componentName: 'Home' });
addRoute({ name: 'recipes', path: '/recipes', componentName: 'RecipesList' });
addRoute({ name: 'blog', path: '/blog', componentName: 'Blog' });
addRoute({ name: 'about', path: '/about', componentName: 'About' });
