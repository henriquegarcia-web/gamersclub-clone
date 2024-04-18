import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

interface ICustomRadio {
  checked: number
}

export const InputRadio = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;

  font-size: 12px;
  line-height: 12px;
  font-weight: 500;

  color: ${Colors.fontSecondary};
`

export const HiddenRadioInput = styled.input.attrs({
  type: 'radio'
})<ICustomRadio>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

export const CustomRadio = styled.span<ICustomRadio>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  border-radius: 50%;
  background-color: ${({ checked }) =>
    checked ? Colors.brand : 'transparent'};
  transition: background-color 0.2s ease;

  border: 2px solid rgba(255, 255, 255, 0.16);

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    opacity: ${({ checked }) => (checked ? '1' : '0')};
    transition: opacity 0.2s ease;
  }
`
