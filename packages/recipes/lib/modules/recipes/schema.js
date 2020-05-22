import FormsUpload from 'meteor/vulcan:forms-upload';
import EditorComponent from '../../components/common/EditorComponent';

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
  },
  seasonIds: {
    label: 'SeasonIds',
    type: Array,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    optional: true,
    hidden: (props, document) => {
      return true;
      // return !props.document._id;
    },
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
    optional: true,
    hidden: (props, document) => {
      return true;
      // return !props.document._id;
    },
  },
  body: {
    label: 'Body',
    type: String,
    input: 'EditorComponent',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    optional: true,
    hidden: (props, document) => {
      return !props.document._id;
    },
  },
  mainImage: {
    label: 'Main Image',
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    optional: true,
    resolveAs: {
      fieldName: 'mainImage',
      type: 'String',
      resolver: async (document) => {
        const missing = 'https://image.flaticon.com/icons/png/512/1687/1687282.png';
        return document.mainImage ? document.mainImage : missing;
      },
      addOriginalField: false 
    }
  },

  // GraphQL-only field
};

export default schema;
