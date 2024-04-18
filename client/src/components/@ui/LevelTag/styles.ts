import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const LevelTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding-top: 3px;
  border-radius: 100%;
  overflow: hidden;

  font-size: 15px;
  line-height: 15px;
  font-weight: 400;
  letter-spacing: 0.5px;

  color: ${Colors.fontSecondary};
  background-color: #53a18b;
`
