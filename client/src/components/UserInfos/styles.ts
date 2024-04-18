import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const UserInfos = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 5px;
  cursor: pointer;
  transition: 0.25s;

  border-left: 1px solid ${Colors.backgroundQuinary};
  border-bottom: 1px solid transparent;

  &:hover,
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.025);
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
    color: ${Colors.fontWhite};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #f5f5fa;
  }
`

export const UserInfosMain = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 0 20px;
`

export const UserInfosScore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  padding: 5px 0;
  background: linear-gradient(
      0deg,
      rgba(159, 162, 199, 0.16),
      rgba(159, 162, 199, 0) 75%
    ),
    linear-gradient(0deg, #282a3e, rgba(40, 42, 62, 0)),
    url(https://static.gamersclub.com.br/assets/header-leaderboard-pattern.png);

  img {
    width: 16px;
    margin-top: -3px;
  }

  p {
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    font-style: italic;

    color: ${Colors.fontSecondary};
  }
`
