import styled from 'styled-components'
import {
  mainHeaderHeight,
  responsiveLargeDesktop,
  topHeaderHeight
} from '@/utils/styles/globals'
import { Colors } from '@/utils/styles/colors'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`

// ====================================== MAIN HEADER

export const MainHeader = styled.div`
  display: flex;
  width: 100%;
  height: ${mainHeaderHeight};

  background-color: ${Colors.backgroundSecondary};
  border-top: 1px solid rgba(250, 249, 247, 0.08);
  box-shadow: inset 0 -1px hsla(0, 0%, 100%, 0.1),
    0 8px 16px -4px rgba(0, 0, 0, 0.75);
`

export const MainHeaderPrimary = styled.div`
  display: flex;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
`

export const MainHeaderLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 100%;
  padding-top: 1px;
  cursor: pointer;
  transition: 0.25s;

  img {
    height: 35%;
  }

  background-image: linear-gradient(135deg, #3d3d3d, rgba(61, 61, 61, 0));
  border-bottom: 1px solid #3d3d3d;

  &:hover,
  &:focus {
    background-color: #393939;
    border-bottom: 1px solid #195aff;
  }
`

export const MainHeaderNavBar = styled.div`
  display: flex;
  flex: 1;
`

// ====================================== TOP HEADER

export const TopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  height: ${topHeaderHeight};

  background: linear-gradient(
    90deg,
    #1a75bf 4.9%,
    #9a70ff 55.92%,
    #c43e5a 99.09%
  );

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;

    b {
      font-family: 'Poppins', sans-serif;
      text-transform: uppercase;
    }

    color: ${Colors.fontSecondary};
  }

  button {
    display: flex;
    align-items: center;
    padding: 0 14px;
    height: 28px;
    border-radius: 15px;
    opacity: 0.9;
    cursor: pointer;
    transition: 0.3s;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;

    color: ${Colors.brand};
    background: ${Colors.primary};

    &:hover {
      opacity: 1;
    }
  }
`

// ====================================== NAVBAR LOBBY

export const NavBarLobby = styled.div`
  display: flex;

  button {
    border-right: 1px solid ${Colors.backgroundQuinary};
  }
`

export const NavBarLobbyDesktopWrapper = styled.div`
  display: flex;

  @media (max-width: ${responsiveLargeDesktop}) {
    display: none;
  }
`

export const NavBarLobbyMenuMobile = styled.div`
  position: relative;
  display: none;
  flex-direction: column;

  @media (max-width: ${responsiveLargeDesktop}) {
    display: flex;
  }
`

export const NavBarLobbyMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;

  button {
    height: 70px;

    p {
      font-size: 13px;
    }

    background-color: ${Colors.backgroundSecondary};
    border: none;

    &:hover {
      background-color: ${Colors.backgroundTertiary};
      border: none;
    }
  }
`

// ====================================== NAVBAR USER

export const NavBarUser = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  button {
    border-left: 1px solid ${Colors.backgroundQuinary};
  }
`

export const NavBarUserInfos = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 0 20px;
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
`
