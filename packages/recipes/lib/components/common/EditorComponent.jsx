import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {registerComponent, Components} from 'meteor/vulcan:core';

class EditorComponent extends Component {
  constructor(props) {
    super(props);
    const name = this.props.name;
    this.state = {
      name: name,
      editor: <Components.Loading/>,
      model: this.props.document[name]
    };
  }

  componentDidUpdate() {
    this.props.document[this.state.name] = this.state.model;
    // this.props.onChange();
  }

  componentDidMount() {
    import 'froala-editor/css/froala_style.min.css';
    import 'froala-editor/css/froala_editor.pkgd.min.css';
    import FroalaEditorComponent from 'react-froala-wysiwyg';

    const handleModelChange =(model) => {
      this.props.currentValues[this.state.name] = model;
      this.setState({
        model: model
      });
    };

    const editor =
      <FroalaEditorComponent
        tag='textarea'
        model={this.state.model}
        onModelChange={handleModelChange}
      />;

    this.setState({editor: editor});
  }

  render() {
    return (this.state.editor);
  }
}

registerComponent({name: 'EditorComponent', component: EditorComponent});
