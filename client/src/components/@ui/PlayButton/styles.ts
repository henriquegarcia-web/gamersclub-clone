import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 100%;
  cursor: pointer;
  transition: 0.25s;

  font-size: 22px;
  text-transform: uppercase;

  color: ${Colors.fontPrimary};
  background-color: ${Colors.success};

  &:hover,
  &:focus {
    background-color: ${Colors.successLight};
    -webkit-box-shadow: 0 0 4px ${Colors.success};
    box-shadow: 0 0 4px ${Colors.success};
  }
`
