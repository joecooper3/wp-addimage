import React from 'react';
import styled from 'styled-components';

import { blue, white, rubik } from '../styles';

const Title = () => (
  <TitleContainer>
    <h1>WordPress Add Image Size Generator</h1>
  </TitleContainer>
);

export default Title;

const TitleContainer = styled.div`
  font-size: 22px;
  line-height: 1.8;
  padding: 2px 0;
  width: 500px;
  margin: 20px auto;
  grid-column: 1 / 3;
  color: ${white};
  font-family: ${rubik};
  h1 {
    font-weight: 400;
    background-color: ${blue};
    text-align: center;
    color: ${white};
    display: inline;
    padding: 6px 12px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
`;
