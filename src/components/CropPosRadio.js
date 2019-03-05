import React, { Fragment, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../context/OptionsContext';

import { radioInput, radioLabel, labelText } from '../styles';

const CropPosRadio = () => {
  const options = useContext(OptionsContext);
  const xPosContainer = useRef();
  const yPosContainer = useRef();

  const { changeCropPos } = options;
  const { hardCrop } = options.options;

  useEffect(() => {
    if (!hardCrop) {
      const xInputs = xPosContainer.current.querySelectorAll('input');
      xInputs.forEach(el => {
        el.checked = false;
      });
      const yInputs = yPosContainer.current.querySelectorAll('input');
      yInputs.forEach(el => {
        el.checked = false;
      });
      changeCropPos('xPos', 'center');
      changeCropPos('yPos', 'center');
    }
  });

  return (
    <Fragment>
      <RadioContainer ref={xPosContainer}>
        <Title>Horizontal Crop Position</Title>
        <Input
          id="xLeft"
          name="xPos"
          value="left"
          type="radio"
          onChange={() => changeCropPos('xPos', 'left')}
          disabled={!hardCrop}
        />
        <Label htmlFor="xLeft">Left</Label>
        <Input
          id="xCenter"
          name="xPos"
          value="center"
          type="radio"
          onChange={() => changeCropPos('xPos', 'center')}
          disabled={!hardCrop}
        />
        <Label htmlFor="xCenter">Center</Label>
        <Input
          id="xRight"
          name="xPos"
          value="right"
          type="radio"
          onChange={() => changeCropPos('xPos', 'right')}
          disabled={!hardCrop}
        />
        <Label htmlFor="xRight">Right</Label>
      </RadioContainer>
      <RadioContainer ref={yPosContainer}>
        <Title>Vertical Crop Position</Title>
        <Input
          id="yTop"
          name="yPos"
          value="top"
          type="radio"
          onChange={() => changeCropPos('yPos', 'top')}
          disabled={!hardCrop}
        />
        <Label htmlFor="yTop">Top</Label>
        <Input
          id="yCenter"
          name="yPos"
          value="center"
          type="radio"
          onChange={() => changeCropPos('yPos', 'center')}
          disabled={!hardCrop}
        />
        <Label htmlFor="yCenter">Center</Label>
        <Input
          id="yBottom"
          name="yPos"
          value="bottom"
          type="radio"
          onChange={() => changeCropPos('yPos', 'bottom')}
          disabled={!hardCrop}
        />
        <Label htmlFor="yBottom">Bottom</Label>
      </RadioContainer>
    </Fragment>
  );
};

export default CropPosRadio;

const RadioContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-self: start;
`;

const Title = styled.h3`
  ${labelText()}
  flex-basis: 100%;
`;

const Input = styled.input`
  ${radioInput()}
`;

const Label = styled.label`
  ${radioLabel()}
`;
