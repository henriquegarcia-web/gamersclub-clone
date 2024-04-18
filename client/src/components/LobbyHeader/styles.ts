import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const LobbyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 0;
`

export const LobbyHeaderIndicators = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  * {
    font-family: 'Poppins', sans-serif;
  }
`

export const LinkIndicator = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  width: fit-content;
  height: fit-content;
  padding: 5px 8px;
  margin-right: 6px;
  cursor: pointer;
  transition: 0.3s;

  font-size: 12px;
  font-weight: 500;

  img {
    width: 16px;
    margin-top: -2px;
  }

  color: ${Colors.fontSecondary};
  background-color: ${Colors.backgroundSecondary};
  border: 1px solid rgba(250, 249, 247, 0.08);
`

export const LobbyHeaderActions = styled.div`
  display: flex;
  padding: 10px 0;
  border-radius: 8px;

  * {
    font-family: 'Poppins', sans-serif;
  }

  background-color: ${Colors.backgroundSecondary};
  border: 1px solid rgba(250, 249, 247, 0.08);
`

export const GameAction = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 0 15px;
  cursor: pointer;

  border-right: 1px solid rgba(250, 249, 247, 0.08);

  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`

export const GameActionImage = styled.div`
  display: flex;
  width: 35 px;
  height: 35 px;

  img {
    transition: 0.3s;
    width: 100%;
    height: 100%;
    object-fit: contain;

    filter: grayscale(100%);
  }
`

export const GameActionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 4px;

  p {
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    text-transform: uppercase;

    color: ${Colors.fontSecondary};
  }

  b {
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;

    color: ${Colors.brand};
  }
`

export const SwitchAction = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 0 15px;

  p {
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    text-transform: uppercase;

    color: ${Colors.fontSecondary};
  }
`
