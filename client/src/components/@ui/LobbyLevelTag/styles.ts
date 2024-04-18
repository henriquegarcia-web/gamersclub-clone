import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const LobbyLevelTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
  padding: 2px;

  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.15);
  background: linear-gradient(142deg, #00e9ff, #0076ff 99%);
`

export const LobbyLevelTagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 2px;
  border-radius: 100%;

  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  line-height: 17px;
  font-weight: 500;

  border: 3px solid ${Colors.backgroundSecondary};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
  color: ${Colors.fontSecondary};
  background-color: #53a18b;
`
