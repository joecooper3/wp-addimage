import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { code } from '../styles';

import { OptionsContext } from '../context/OptionsContext';

const CodeCopyPaste = () => {
  const [codeString, setCode] = useState('add_image_size(image-size-name);');
  const options = useContext(OptionsContext);
  const { name, width, height, hardCrop } = options.options;

  useEffect(() => {
    const wString = width ? `, ${width}` : ``;

    let hString;
    if (width && height) {
      hString = `, ${height}`;
    } else if (height) {
      hString = `, 9999, ${height}`;
    } else {
      hString = '';
    }

    const cropString = hardCrop ? `, true` : '';
    const fullString = `add_image_size(${name}${wString}${hString}${cropString});`;
    setCode(fullString);
  });

  return <CodeTextArea value={codeString} readOnly />;
};
export default CodeCopyPaste;

const CodeTextArea = styled.textarea`
  margin: 50px 0 0 0;
  font-family: ${code};
  width: 100%;
  font-size: 14px;
  resize: none;
  padding: 10px;
`;
