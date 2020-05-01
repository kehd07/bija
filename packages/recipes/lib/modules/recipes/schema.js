import FormsUpload from 'meteor/vulcan:forms-upload';

const schema = {

  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => {
      return new Date();
    }
  },
  userId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      resolver(recipe, args, context) {
        return context.Users.findOne({ _id: recipe.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
      },
      addOriginalField: true
    }
  },

  // custom properties
  name: {
    label: 'Name',
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'textarea',
  },
  seasonIds: {
    label: 'SeasonIds',
    type: Array,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  'seasonIds.$': {
    label: 'SeasonId',
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'input',
  },
  category: {
    label: 'Category',
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'input',
  },
  description: {
    label: 'Description',
    type: String,
    optional: true,
    input: 'textarea',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  ingredients: {
    label: 'Ingredients',
    type: Array,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  'ingredients.$': {
    label: 'Ingredient',
    type: String,
    optional: true,
    input: 'textarea',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  steps: {
    label: 'Steps',
    type: Array,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  'steps.$': {
    label: 'Step',
    type: String,
    optional: true,
    input: 'textarea',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  imageUrls: {
    label: 'Image URLs',
    type: Array,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  'imageUrls.$': {
    label: 'Image URLs',
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: FormsUpload,
  },

  // GraphQL-only field
};

export default schema;
