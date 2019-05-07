import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../../context/OptionsContext';

import { blue, white, code, labelText } from '../../styles';

const ImageItem = props => {
  const { demoName, demoWidth, demoHeight, image } = props;
  const options = useContext(OptionsContext);
  const { name, width, height, hardCrop, xPos, yPos } = options.options;

  const [displayWidth, setDisplayWidth] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(0);
  const [cssWidth, setCssWidth] = useState(0);
  const [cssHeight, setCssHeight] = useState(0);

  const scaleToWidth = () => {
    const ratio = width / demoWidth;
    if (ratio < 1) {
      setDisplayWidth(Math.round(width));
      setDisplayHeight(Math.round(demoHeight * ratio));
    } else {
      setDisplayHeight(demoHeight);
      setDisplayWidth(demoWidth);
    }
  };

  const scaleToHeight = () => {
    const ratio = height / demoHeight;
    if (ratio < 1) {
      setDisplayHeight(Math.round(height));
      setDisplayWidth(Math.round(demoWidth * ratio));
    } else {
      setDisplayHeight(demoHeight);
      setDisplayWidth(demoWidth);
    }
  };

  const hardCropDetermine = () => {
    if (width && height) {
      setDisplayWidth(demoWidth > width ? width : demoWidth);
      setDisplayHeight(demoHeight > height ? height : demoHeight);
    } else if (width) {
      if (demoWidth > width) {
        const ratio = width / demoWidth;
        setDisplayWidth(width);
        setDisplayHeight(demoHeight * ratio);
      }
    } else if (height) {
      const ratio = height / demoHeight;
      setDisplayHeight(height);
      setDisplayWidth(demoWidth * ratio);
    }
  };

  const softCropDetermine = () => {
    if (width && height) {
      if (demoWidth - width > 0 && demoHeight - height > 0) {
        setDisplayWidth(width);
        setDisplayHeight(height);
      } else if (demoWidth - width > demoHeight - height) {
        scaleToWidth();
      } else {
        scaleToHeight();
      }
    } else if (width) {
      scaleToWidth();
    } else {
      scaleToHeight();
    }
  };

  const determineCssDimensions = () => {
    if (displayWidth > displayHeight) {
      setCssHeight('100%');
      const newHeight = displayHeight / displayWidth;
      console.log(newHeight);
    }
  };

  useEffect(() => {
    if (hardCrop) {
      hardCropDetermine();
    } else {
      softCropDetermine();
    }
    // determineCssDimensions();
  });

  return (
    <Container>
      <Title>
        {demoName} (original image {demoWidth}x{demoHeight})
      </Title>
      <Title>
        {name} (new size: {displayWidth}x{displayHeight})
      </Title>
      <UntouchedImage>
        <img src={`${image}`} alt="The image before upload to WordPress" />
      </UntouchedImage>
      <ImageContainer
        style={{
          backgroundImage: `url(${image})`,
          width: `${displayWidth}px`,
          height: `${displayHeight}px`
        }}
      >
        <Specs>
          {displayWidth}x{displayHeight}
        </Specs>
      </ImageContainer>
    </Container>
  );
};

export default ImageItem;

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 350px;
  grid-template-columns: 50% 50%;
  grid-column-gap: 25px;
  justify-items: stretch;
  position: relative;
  color: ${blue};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Title = styled.h3`
  ${labelText()}
  text-align: center;
`;

const UntouchedImage = styled.div`
  overflow: hidden;
  height: 100%;
  text-align: right;
  max-height: 350px;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: flex-start;
  background-size: cover;
  border: 1px solid ${blue};
  height: 100%;
  max-height: 350px;
`;

const Specs = styled.div`
  background: ${blue};
  color: ${white};
  font-family: ${code};
  font-weight: bold;
  letter-spacing: 0.3px;
  padding: 4px 10px;
`;
