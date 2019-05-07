import React, { useContext } from 'react';
import styled from 'styled-components';

import { OptionsContext } from '../../context/OptionsContext';
import { black, blue, white, arimo, code, mainWidth } from '../../styles';

import dog from '../../images/dog.jpeg';
import lamps from '../../images/lamps.jpeg';
import tokyo from '../../images/tokyo-signs.jpeg';

import ImageItem from './ImageItem';

const ImageExamples = () => {
  const options = useContext(OptionsContext);
  const { name, width, height } = options.options;

  if (width || height || name) {
    return (
      <Container>
        <Title>
          <CodeName>{name}</CodeName> in Action
        </Title>
        <ImageGrid>
          <ImageItem
            demoName="Small"
            demoWidth={200}
            demoHeight={200}
            image={dog}
          />
          <ImageItem
            demoName="Medium"
            demoWidth={800}
            demoHeight={800}
            image={tokyo}
          />
          <ImageItem
            demoName="Large"
            demoWidth={1600}
            demoHeight={1600}
            image={lamps}
          />
          <ImageItem
            demoName="Tall"
            demoWidth={400}
            demoHeight={1600}
            image={tokyo}
          />
          <ImageItem
            demoName="Wide"
            demoWidth={1600}
            demoHeight={400}
            image={dog}
          />
        </ImageGrid>
      </Container>
    );
  }
  return null;
};

export default ImageExamples;

const Container = styled.section`
  margin: 70px 0 35px 0;
  display: flex;
  grid-column: 1/3;
  flex-flow: column nowrap;
  width: 100%;
`;

const Title = styled.h2`
  border-bottom: 1px solid ${blue};
  font-family: ${arimo};
  color: ${blue};
  flex-basis: 100%;
  max-width: ${mainWidth};
  margin: 0 auto 40px auto;
  width: 100%;
`;

const CodeName = styled.span`
  background: ${white};
  color: ${blue};
  font-family: ${code};
  padding: 5px 10px;
  border: 1px solid ${black};
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 400px);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
`;
