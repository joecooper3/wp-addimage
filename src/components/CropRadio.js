import React, { useContext } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../context/OptionsContext';

const CropRadio = () => {
  const options = useContext(OptionsContext);
  const { changeCrop } = options;
  return (
    <RadioContainer>
      <h3>Hard crop?</h3>
      <label htmlFor="no">No</label>
      <input name="hardCrop" value="no" type="radio" onChange={() => changeCrop(false)} />
      <label htmlFor="yes">Yes</label>
      <input name="hardCrop" value="yes" type="radio" onChange={() => changeCrop(true)} />
    </RadioContainer>
  );
};

export default CropRadio;

const RadioContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 300px;
`;
