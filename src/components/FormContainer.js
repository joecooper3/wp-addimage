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

const Container = styled.div`
  grid-columns: 1 / 3;
  height: 100px;
`;
