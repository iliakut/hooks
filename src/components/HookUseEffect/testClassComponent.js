import React, {Component} from 'react';

class TestClassComponent extends Component {
  componentDidMount() {
    console.log('componentDidMount()')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate()')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }

  render() {
    return (
      <div>
        {this.props.test}
      </div>
    );
  }
}

export default TestClassComponent;