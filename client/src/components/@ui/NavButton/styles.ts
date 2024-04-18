import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

interface INavButton {
  selected: number
}

interface INavButtonIndicator {
  hasalert: number
}

export const NavButton = styled.button<INavButton>`
  position: relative;
  display: flex;
  width: 90px;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;

  background: ${({ selected }) =>
    selected
      ? 'linear-gradient(-180deg, rgba(44, 151, 222, 0) 20%, rgba(44, 151, 222, .2))'
      : 'transparent'};
  border-bottom: 1px solid transparent;

  &:hover,
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.025);
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
    color: ${Colors.fontWhite};
  }
`

export const NavButtonWrapper = styled.div<INavButtonIndicator>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  transition: 0.3s;

  &:hover,
  &:focus {
    span {
      background-color: hsla(0, 0%, 100%, 0.025);
    }
  }
`

export const NavButtonIcon = styled.div`
  display: flex;
  align-items: flex-end;
  height: 24px;

  img {
    width: 22px;
    height: 22px;
  }

  svg {
    font-size: 16px;

    color: ${Colors.fontWhite};
  }
`

export const NavButtonLabel = styled.p<INavButtonIndicator>`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  text-transform: uppercase;

  color: ${({ hasalert }) => (hasalert ? Colors.error : Colors.fontSecondary)};
`

export const NavButtonFlag = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  &::before {
    content: '';
    position: absolute;
    left: 0px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 35px 35px 0 0px;
    border-color: #00c466 transparent transparent transparent;
    z-index: 0px;
  }

  &::after {
    content: 'NEW';
    position: absolute;
    left: 2px;
    top: 4px;
    z-index: 1;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    font-weight: 800;
    font-size: 10px;
    color: #1f1f1f;
  }
`

export const NavButtonIndicator = styled.div`
  position: absolute;
  top: 16px;
  right: 32px;
  width: 8px;
  height: 8px;
  border-radius: 100%;

  background-color: ${Colors.error};
`
