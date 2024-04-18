import styled from 'styled-components'
import { Screen, contentWrapper } from '@/utils/styles/globals'
import { Colors } from '@/utils/styles/colors'

export const LobbyScreen = styled(Screen)`
  display: flex;

  background-color: ${Colors.backgroundPrimary};
`

export const LobbyScreenContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px;
`

export const LobbyScreenContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${contentWrapper};
`
