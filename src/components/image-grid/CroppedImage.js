import React, { Fragment, useContext, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../../context/OptionsContext';

const CroppedImage = props => {
  const { imageUrl, height, width } = props;
  const options = useContext(OptionsContext);
  const { hardCrop, xPos, yPos } = options.options;

  const [cssHeight, setCssHeight] = useState(0);
  const [cssWidth, setCssWidth] = useState(0);

  // TODO: un-placeholder these
  const EL_HEIGHT = 300;
  const EL_WIDTH = 600;

  useLayoutEffect(() => {
    // TODO: Add logic for when image can be displayed at full size (i.e., it's smaller than container)
    if (height - EL_HEIGHT > width - EL_WIDTH) {
      const ratio = EL_HEIGHT / height;
      setCssHeight(EL_HEIGHT);
      setCssWidth(width * ratio);
    } else {
      const ratio = EL_WIDTH / width;
      setCssWidth(EL_WIDTH);
      setCssHeight(height * ratio);
    }
  }, [height, width]);
  return (
    <Fragment>
      <Image
        src={imageUrl}
        hardCrop={hardCrop}
        xPos={xPos}
        yPos={yPos}
        height={cssHeight}
        width={cssWidth}
      />
    </Fragment>
  );
};

export default CroppedImage;

const Image = styled.img`
  object-fit: ${props => (props.hardCrop ? 'cover' : 'contain')};
  object-position: ${props => `${props.yPos} ${props.xPos}`};
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`;
