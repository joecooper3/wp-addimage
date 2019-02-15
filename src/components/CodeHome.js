import React, { Component } from 'react';
import styled from 'styled-components';

import { code } from '../styles';

import { OptionsContext } from './OptionsContext';

class CodeHome extends Component {
    render() {
    return (
        <OptionsContext.Consumer>
            {context => (
                <CodeTextArea value={`add_image_size(${context.options.name}, 355, 535, true)`} readOnly />
            ) }
        </OptionsContext.Consumer>
    );
    }
}

export default CodeHome;

const CodeTextArea = styled.textarea`
    margin: 50px 0 0 0;
    font-family: ${code};
    width: 100%;
    font-size: 14px;
    resize: none;
    padding: 10px;
`;