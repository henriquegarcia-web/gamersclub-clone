import styled from 'styled-components'
import {
  Screen,
  contentWrapper,
  responsiveDesktop
} from '@/utils/styles/globals'
import { Colors } from '@/utils/styles/colors'

export const LobbyScreen = styled(Screen)`
  display: flex;

  background-color: ${Colors.backgroundPrimary};

  @media screen and (max-width: ${responsiveDesktop}) {
    display: none;
  }
`

export const LobbyScreenContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 25px;
`

export const LobbyScreenContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  max-width: ${contentWrapper};
`

export const LobbyListWrapper = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px 20px;
`

export const LobbyScreenMobile = styled(Screen)`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 20px;

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;

  color: ${Colors.fontWhite};

  background-color: ${Colors.backgroundPrimary};

  @media screen and (max-width: ${responsiveDesktop}) {
    display: flex;
  }
`
