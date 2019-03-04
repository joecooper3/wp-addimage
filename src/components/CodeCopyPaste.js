import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { black, blue, arimo, code } from '../styles';

import { OptionsContext } from '../context/OptionsContext';

const CodeCopyPaste = () => {
  const [codeString, setCodeString] = useState('add_image_size(image-size-name);');
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
    setCodeString(fullString);
  });

  const handleFocus = e => {
    e.target.select();
  };

  return (
    <CopyPasteContainer>
      <Caption>Copy and paste the following into functions.php</Caption>
      <CodeTextArea value={codeString} onFocus={e => handleFocus(e)} readOnly />
    </CopyPasteContainer>
  );
};
export default CodeCopyPaste;

const CopyPasteContainer = styled.section`
  grid-column: 1 / 3;
  margin: 50px 0 0 0;
`;

const Caption = styled.h3`
  font-family: ${arimo};
  text-transform: uppercase;
  color: ${blue};
  font-size: 13px;
  letter-spacing: 0.5px;
`;

const CodeTextArea = styled.textarea`
  font-family: ${code};
  width: 100%;
  font-size: 16px;
  resize: none;
  padding: 10px 10px 6px 10px;
  border: 1px solid ${black};
  grid-column: 1 / 3;
  box-sizing: border-box;
`;
