import { css } from 'styled-components';
import { white, black, blue, arimo } from './Variables';

// UI defaults
export const labelText = () => css`
  font-family: ${arimo};
  text-transform: uppercase;
  color: ${blue};
  font-size: 13px;
  letter-spacing: 0.5px;
`;
export const radioInput = () => css`
  left: -99999px;
  position: absolute;

  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    position: absolute;
    height: 14px;
    width: 14px;
    top: 4px;
    left: 4px;
    background: ${blue};
    border-radius: 100%;
    transition: 0.2s all;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }

  &:focus + label:before {
    outline: ${blue} auto 2px;
  }

  &:disabled + label {
    color: #aeaeae;
    cursor: not-allowed;
  }

  &:disabled + label:before {
    opacity: 0.4;
  }
`;

export const radioLabel = () => css`
  cursor: pointer;
  position: relative;
  font-family: ${arimo};
  padding: 4px 15px 0 28px;
  font-size: 13px;
  font-weight: bold;
  &:before {
    content: '';
    height: 20px;
    width: 20px;
    background: ${white};
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    border: 1px solid ${black};
  }
`;
