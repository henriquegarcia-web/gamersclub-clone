import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const LobbyHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  padding: 25px 0;
`

// ============================================== TOP HEADER

export const LobbyTopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

  &:hover {
    background-color: ${Colors.backgroundTertiary};
  }
`

export const LobbyHeaderActions = styled.div`
  display: flex;
  padding: 10px 0;
  border-radius: 4px;

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

// ============================================== MAIN HEADER

export const LobbyMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: ${Colors.backgroundTertiary};
  border: 1px solid rgba(250, 249, 247, 0.08);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`

export const LobbyMainFilter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 25px 30px;
`

export const LobbyMainFilterContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  * {
    font-family: 'Poppins', sans-serif;
  }
`

export const FilterLabel = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  p {
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    text-transform: uppercase;

    color: ${Colors.fontSecondary};
  }
`

export const FilterRadios = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`

export const FilterFlag = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.fontPrimary};
  font-weight: 600;
  font-size: 12px;
  width: 48px;
  height: 20px;
  background: ${Colors.success};
  border-radius: 2px;
  margin-left: 8px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 9px 10px 0px;
    border-color: transparent ${Colors.success} transparent transparent;
    top: 50%;
    left: -8px;
    margin-top: -10px;
    border-radius: 2px;
  }

  img {
    width: 14px;
    margin-right: 2px;
  }
`

export const LobbyMainFilterSlide = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const FilterSlideThumb = styled.div`
  position: absolute;
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  transition: 0.3s;
  cursor: grab;

  background-color: ${Colors.primary};

  &:hover {
    transform: scale(1.3);
  }
`

export const FilterSlideThumbPrimary = styled(FilterSlideThumb)`
  left: 0;
`

export const FilterSlideThumbSecondary = styled(FilterSlideThumb)`
  right: 0;
`

export const FilterSlideTrack = styled.div`
  display: flex;
  width: 100%;
  height: 6px;
  border-radius: 50px;

  background-color: ${Colors.brand};
`

export const LobbyFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  height: 100%;
  padding: 0 30px;
  margin-right: auto;
  cursor: pointer;

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  text-transform: uppercase;

  color: ${Colors.fontSecondary};

  border-left: 1px solid rgba(250, 249, 247, 0.08);
  border-right: 1px solid rgba(250, 249, 247, 0.08);

  svg {
    font-size: 30px;
  }
`

export const LobbyActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 0 30px;
`
