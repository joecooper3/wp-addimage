import React from 'react';
import styled from 'styled-components';

import { black, blue, tan, white, arimo, code } from '../styles';

const Title = () => (
  <TitleContainer>
    <Top>WordPress</Top>
    <Meat>add_image_size</Meat>
    <Bottom>Generator</Bottom>
  </TitleContainer>
);

export default Title;

const TitleContainer = styled.h1`
  display: flex;
  position: relative;
  height: 164px;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1.8;
  padding: 2px 0;
  width: 550px;
  margin: 20px auto;
  grid-column: 1 / 3;
  color: ${white};
  font-family: ${arimo};
`;

const Top = styled.div`
  font-family: ${arimo};
  background-color: ${blue};
  color: ${white};
  position: absolute;
  left: 0;
  top: 0;
  padding: 4px 16px;
  border: 3px solid ${tan};
`;

const Meat = styled.div`
  font-family: ${code};
  background-color: ${white};
  color: ${blue};
  font-size: 48px;
  padding: 10px 30px;
  border: 1px solid ${black};
`;

const Bottom = styled.div`
  display: inline;
  font-family: ${arimo};
  background-color: ${blue};
  color: ${white};
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 4px 16px;
  border: 3px solid ${tan};
`;
