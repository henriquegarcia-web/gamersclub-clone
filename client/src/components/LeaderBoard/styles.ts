import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const LeaderBoard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  background: linear-gradient(
    0deg,
    rgba(237, 208, 68, 0.08),
    rgba(237, 208, 68, 0)
  );

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #e5c320;
  }

  &:hover {
    background: linear-gradient(
      0deg,
      rgba(237, 208, 68, 0.3),
      rgba(237, 208, 68, 0)
    );
  }
`

export const LeaderBoardDivider = styled.img`
  height: 60%;
`

export const LeaderBoardCountdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1px;
  width: fit-content;
  height: 100%;
  padding: 0 30px 0 18px;
`

export const LeaderBoardCountdownLabel = styled.p`
  display: flex;

  font-size: 15px;
  line-height: 15px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  color: ${Colors.fontSecondary};
`

export const LeaderBoardCountdownDate = styled.p`
  display: flex;

  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;

  color: ${Colors.fontSecondary};
`
