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

  imageUrl: {
    label: 'Image URL',
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: FormsUpload,
    options: {
      preset: 'vulcanstagram'
    },
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

  // GraphQL-only field
};

export default schema;
