import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import CodeCopyPaste from './CodeCopyPaste';
import CropRadio from './CropRadio';

const FormContainer = () => (
  <Container>
    <Input name="Name" type="text" keyName="name" />
    <Input name="Max Width" type="number" keyName="width" />
    <Input name="Max Height" type="number" keyName="height" />
    <CropRadio />
    <CodeCopyPaste />
  </Container>
);

export default FormContainer;

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 80px) 1fr;
  grid-auto-flow: column dense;
  grid-auto-rows: 75px;
`;
