import React, { Component } from 'react';
import { OptionsContext } from './OptionsContext';

class OptionsProvider extends Component {
  state = {
    name: 'sample-name',
    width: null,
    height: null,
    hardCrop: false
  };

  changeName = inp => {
    this.setState({
      name: inp.target.value
    });
  };

  render() {
    return (
      <OptionsContext.Provider
        value={{
          options: this.state,
          changeName: this.changeName
        }}
      >
        {this.props.children}
      </OptionsContext.Provider>
    );
  }
}

export default OptionsProvider;
