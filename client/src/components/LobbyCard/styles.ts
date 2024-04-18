import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const LobbyCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 5px;
  border-radius: 6px;

  background-color: ${Colors.backgroundSecondary};
  border: 1px solid rgba(250, 249, 247, 0.08);
  box-shadow: inset 0 -1px hsla(0, 0%, 100%, 0.1),
    0 8px 16px -4px rgba(0, 0, 0, 0.75);
`

export const LobbyCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px 0;

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    line-height: 15px;
    font-weight: 600;

    color: ${Colors.fontWhite};
  }
`

export const LobbyCardStamps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
`

const Stamp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  overflow: hidden;
  padding: 2px;

  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.15);
  background: linear-gradient(142deg, #00e9ff, #0076ff 99%);

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;

    border: 3px solid ${Colors.backgroundSecondary};
  }
`

export const PremiumStamp = styled(Stamp)`
  display: flex;
`

export const VerifiedStamp = styled(Stamp)`
  display: flex;
`

export const LobbyCardPlayers = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 2px;
`

export const LobbyCardEntry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  svg {
    font-size: 22px;
  }

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;

  color: ${Colors.fontWhite};
  background-color: ${Colors.brand};

  &:hover {
    background-color: ${Colors.brandLight};
  }
`

// ========================================== PLAYER CARD

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  padding: 6px 0 6px 1px;
  border-radius: 3px;

  background-color: #ffffff05;
`

export const PlayerCardImage = styled.div`
  display: flex;
  width: fit-content;

  span {
    width: 36px;
    height: 36px;
    border-radius: 100%;

    border: 2px solid ${Colors.backgroundQuarternary};
    background-color: ${Colors.backgroundTertiary};
  }
`

export const PlayerCardLevel = styled.div`
  display: flex;

  span {
    width: 22px;
    height: 22px;
    border-radius: 100%;
    margin-top: -1px;

    border: 2px solid ${Colors.backgroundQuarternary};
    background-color: ${Colors.backgroundTertiary};
  }
`

export const PlayerCardStamps = styled.div`
  display: flex;
  height: 15px;
`
