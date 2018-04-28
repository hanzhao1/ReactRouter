import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions';
// import _ from 'lodash';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew)

// function mapStateToProps(state) {
//   return { posts: state.posts };
// }

// export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
