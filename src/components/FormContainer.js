import React from 'react';
import styled from 'styled-components';

// import { blue, white } from '../styles';

import Input from './Input';
import CodeHome from './CodeHome';

const FormContainer = () => {
  return (
    <Container>
        <Input name='Name' type='text' />
        <Input name='Max Width' type='number' />
        <CodeHome />
    </Container>
  )
}

export default FormContainer;

const Container = styled.div`
    grid-columns: 1 / 3;
    height: 100px;
`;
