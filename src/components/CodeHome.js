import React, { useContext } from 'react';
import styled from 'styled-components';

import { code } from '../styles';

import { OptionsContext } from '../context/OptionsContext';

const CodeHome = () => {
  const options = useContext(OptionsContext);
  const { name, width, height } = options.options;

  return <CodeTextArea value={`add_image_size(${name}, ${width}, ${height}, true)`} readOnly />;
};
export default CodeHome;

const CodeTextArea = styled.textarea`
  margin: 50px 0 0 0;
  font-family: ${code};
  width: 100%;
  font-size: 14px;
  resize: none;
  padding: 10px;
`;
