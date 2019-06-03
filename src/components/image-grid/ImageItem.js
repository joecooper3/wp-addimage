import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../../context/OptionsContext';

import { blue, white, code, labelText } from '../../styles';

const ImageItem = props => {
  const { demoName, demoWidth, demoHeight, image } = props;
  const options = useContext(OptionsContext);
  const { name, width, height, hardCrop, xPos, yPos } = options.options;
  const imgContainer = useRef(null);

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
      if (width - demoWidth > 0 && height - demoHeight > 0) {
        setDisplayWidth(demoWidth);
        setDisplayHeight(demoHeight);
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
    const containerWidth = imgContainer.current.clientWidth;
    const containerHeight = imgContainer.current.clientHeight;
    const shrinkWidth = displayWidth > containerWidth;
    const shrinkHeight = displayHeight > containerHeight;
    if (shrinkWidth && shrinkHeight) {
      console.log('both');
      if (displayHeight - containerHeight > displayWidth - containerWidth) {
        const ratio = containerHeight / displayHeight;
        setCssHeight(`${containerHeight}px`);
        const newWidth = displayWidth * ratio;
        setCssWidth(`${newWidth}px`);
      } else {
        const ratio = containerWidth / displayWidth;
        setCssWidth(`${containerWidth}px`);
        const newHeight = displayHeight * ratio;
        setCssHeight(`${newHeight}px`);
      }
    } else if (shrinkWidth) {
      console.log('shrink width');
      const ratio = containerWidth / displayWidth;
      setCssWidth(`${containerWidth}px`);
      const newHeight = displayHeight * ratio;
      setCssHeight(`${newHeight}px`);
    } else if (shrinkHeight) {
      console.log('shrink height');
      const ratio = containerHeight / displayHeight;
      setCssHeight(`${containerHeight}px`);
      const newWidth = displayWidth * ratio;
      setCssWidth(`${newWidth}px`);
    } else {
      console.log('final else');
      setCssHeight(`${displayHeight}px`);
      setCssWidth(`${displayWidth}px`);
    }
  };

  useEffect(() => {
    if (hardCrop) {
      hardCropDetermine();
    } else {
      softCropDetermine();
    }
    determineCssDimensions();
  }, [
    width,
    height,
    displayWidth,
    displayHeight,
    cssHeight,
    cssWidth,
    hardCrop,
    determineCssDimensions,
    hardCropDetermine,
    softCropDetermine
  ]);

  return (
    <Container>
      {cssHeight}
      {cssWidth}
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
        ref={imgContainer}
        style={{
          backgroundImage: `url(${image})`,
          width: `${cssWidth}`,
          height: `${cssHeight}`,
          maxWidth: '600px' // temporary
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
  grid-template-rows: 50px minmax(150px, auto);
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
  text-align: right;

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
