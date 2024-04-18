import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

interface ILobbyUserPicture {}

export const LobbyUserPicture = styled.div<ILobbyUserPicture>`
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  overflow: hidden;
  padding: 2px;

  background: linear-gradient(142deg, #00e9ff, #0076ff 99%);
`

export const LobbyUserPictureImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;

  border: 2px solid ${Colors.backgroundSecondary};
`
