import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState
} from 'react';
import styled from 'styled-components';

import CroppedImage from './CroppedImage';

import { OptionsContext } from '../../context/OptionsContext';

import { blue, white, code, labelText } from '../../styles';

const ImageItem = props => {
  const { demoName, demoWidth, demoHeight, image } = props;
  const options = useContext(OptionsContext);
  const { name, width, height, hardCrop } = options.options;

  const [displayWidth, setDisplayWidth] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(0);

  const scaleToWidth = useCallback(() => {
    const ratio = width / demoWidth;
    if (ratio < 1) {
      setDisplayWidth(Math.round(width));
      setDisplayHeight(Math.round(demoHeight * ratio));
    } else {
      setDisplayHeight(demoHeight);
      setDisplayWidth(demoWidth);
    }
  }, [width, demoWidth, demoHeight]);

  const scaleToHeight = useCallback(() => {
    const ratio = height / demoHeight;
    if (ratio < 1) {
      setDisplayHeight(Math.round(height));
      setDisplayWidth(Math.round(demoWidth * ratio));
    } else {
      setDisplayHeight(demoHeight);
      setDisplayWidth(demoWidth);
    }
  }, [height, demoHeight, demoWidth]);

  useLayoutEffect(() => {
    if (hardCrop) {
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
    } else if (width && height) {
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
  }, [
    demoHeight,
    demoWidth,
    displayHeight,
    displayWidth,
    hardCrop,
    height,
    scaleToHeight,
    scaleToWidth,
    width
  ]);

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
          width: `100%`,
          maxWidth: '600px' // temporary
        }}
      >
        <CroppedImage
          hardCrop={hardCrop}
          imageUrl={image}
          width={displayWidth}
          height={displayHeight}
        />
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
