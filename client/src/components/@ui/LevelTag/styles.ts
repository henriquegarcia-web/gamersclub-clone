import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const LevelTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding-top: 2px;
  border-radius: 100%;
  overflow: hidden;

  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;

  border: 1px solid hsla(0, 0%, 100%, 0.2);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.15);
  color: ${Colors.fontSecondary};
  background-color: #53a18b;
`
