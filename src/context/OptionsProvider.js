import React, { Component } from 'react';
import { OptionsContext } from './OptionsContext';

class OptionsProvider extends Component {
  state = {
    name: 'sample-name',
    width: null,
    height: null,
    hardCrop: false
  };

  changeValue = (key, inp) => {
    const { value } = inp.target;
    if (!value) {
      if (key === 'width' || key === 'height') {
        this.setState({
          [key]: 'nossir'
        });
        return;
      }
      this.setState({
        [key]: 'image-size-name'
      });
      return;
    }
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <OptionsContext.Provider
        value={{
          options: this.state,
          changeValue: this.changeValue
        }}
      >
        {this.props.children}
      </OptionsContext.Provider>
    );
  }
}

export default OptionsProvider;
