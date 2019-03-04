import React, { Component } from 'react';
import { OptionsContext } from './OptionsContext';

class OptionsProvider extends Component {
  state = {
    name: 'image-size-name',
    width: null,
    height: null,
    hardCrop: false
  };

  changeName = inp => {
    if (!inp) {
      this.setState({
        name: 'image-size-name'
      });
      return;
    }
    this.setState({
      name: inp
    });
  };

  changeNumber = (key, inp) => {
    if (!inp) {
      this.setState({
        [key]: null
      });
      this.turnOffCropCheck(key);
      return;
    }
    this.setState({
      [key]: inp
    });
  };

  changeCrop = inp => {
    this.setState({
      hardCrop: inp
    });
  };

  turnOffCropCheck = key => {
    if ((!this.state.width && key === 'height') || (!this.state.height && key === 'width')) {
      this.setState({
        hardCrop: false
      });
    }
  };

  render() {
    return (
      <OptionsContext.Provider
        value={{
          options: this.state,
          changeName: this.changeName,
          changeNumber: this.changeNumber,
          changeCrop: this.changeCrop
        }}
      >
        {this.props.children}
      </OptionsContext.Provider>
    );
  }
}

export default OptionsProvider;
