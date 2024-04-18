import * as S from './styles'

import { LeaderBoard, NavButton, PlayButton, UserInfos } from '@/components'
import { AnimatePresence, motion } from 'framer-motion'

import { TfiMenu } from 'react-icons/tfi'
import { Icons } from '@/assets/icons'
import { useState } from 'react'

interface IHeader {}

const Header = ({}: IHeader) => {
  return (
    <S.Header>
      <TopHeader />
      <S.MainHeader>
        <S.MainHeaderPrimary>
          <S.MainHeaderLogo href="/">
            <img src="/images/gamersclub-logo.svg" alt="" />
          </S.MainHeaderLogo>
          <PlayButton />
          <LeaderBoard />
        </S.MainHeaderPrimary>
        <S.MainHeaderNavBar>
          <NavBarLobby />
          <NavBarUser />
        </S.MainHeaderNavBar>
      </S.MainHeader>
    </S.Header>
  )
}

export default Header

// ====================================== TOP HEADER

const TopHeader = () => {
  return <S.TopHeader></S.TopHeader>
}

// ====================================== NAVBAR LOBBY

const NavBarLobby = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleOpenMenu = () => setIsOpenMenu(true)
  const handleCloseMenu = () => setIsOpenMenu(false)
  const handleToggleMenu = () => setIsOpenMenu(!isOpenMenu)

  const hiddenIcon = (
    <img src="/icons/hidden.svg" alt="See All Icon" style={{ width: 18 }} />
  )
  const skinsIcon = <img src="/icons/skins.svg" alt="Skins Icon" />
  const championshipIcon = (
    <img src="/icons/championships.svg" alt="Championships Icon" />
  )
  const missionsIcon = (
    <img src="/icons/missions.svg" alt="Missions Icon" style={{ width: 18 }} />
  )
  const academyIcon = <img src="/icons/academy.svg" alt="Academy Icon" />
  const searchIcon = (
    <img src="/icons/search.svg" alt="Search Icon" style={{ width: 16 }} />
  )

  const navbarMenus = [
    {
      id: 'navbar_menu_01',
      icon: skinsIcon,
      label: 'Skins',
      hasAlert: false,
      hasBadge: true,
      hasCounter: false,
      selected: false,
      onClick: () => {}
    },
    {
      id: 'navbar_menu_02',
      icon: championshipIcon,
      label: 'Campeonatos',
      hasAlert: false,
      hasBadge: true,
      hasCounter: false,
      selected: false,
      onClick: () => {}
    },
    {
      id: 'navbar_menu_03',
      icon: missionsIcon,
      label: 'Missões',
      hasAlert: true,
      hasBadge: false,
      hasCounter: false,
      selected: false,
      onClick: () => {}
    },
    {
      id: 'navbar_menu_04',
      icon: academyIcon,
      label: 'Academy',
      hasAlert: true,
      hasBadge: false,
      hasCounter: false,
      selected: false,
      onClick: () => {}
    },
    {
      id: 'navbar_menu_05',
      icon: searchIcon,
      label: 'Buscar',
      hasAlert: false,
      hasBadge: false,
      hasCounter: false,
      selected: false,
      onClick: () => {}
    }
  ]

  return (
    <S.NavBarLobby>
      <S.NavBarLobbyDesktopWrapper>
        {navbarMenus.map((button, index) => (
          <NavButton
            key={index}
            icon={button.icon}
            label={button.label}
            hasAlert={button.hasAlert}
            hasBadge={button.hasBadge}
            onClick={button.onClick}
          />
        ))}
      </S.NavBarLobbyDesktopWrapper>

      <S.NavBarLobbyMenuMobile>
        <NavButton
          icon={hiddenIcon}
          selected
          label="Mais (5)"
          onClick={handleToggleMenu}
        />
        <AnimatePresence>
          {isOpenMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
            >
              <S.NavBarLobbyMenuWrapper>
                {navbarMenus.map((button, index) => (
                  <NavButton
                    key={index}
                    icon={button.icon}
                    label={button.label}
                    onClick={button.onClick}
                  />
                ))}
              </S.NavBarLobbyMenuWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </S.NavBarLobbyMenuMobile>
    </S.NavBarLobby>
  )
}

// ====================================== NAVBAR USER

const NavBarUser = () => {
  const shoppingCartIcon = (
    <img
      src={Icons.shoppingCartIcon}
      alt="Shopping Cart Icon"
      style={{ height: 20, width: 20 }}
    />
  )
  const upgradeIcon = (
    <img
      src={Icons.upgradeIcon}
      alt="Upgrade Icon"
      style={{ height: 20, width: 20 }}
    />
  )
  const notifyIcon = (
    <img
      src="/icons/notify.svg"
      alt="Notify Icon"
      style={{ height: 18, width: 18 }}
    />
  )
  const menuIcon = <TfiMenu />

  const userMenus = [
    {
      id: 'user_menu_01',
      icon: shoppingCartIcon,
      label: 'Loja',
      hasAlert: false,
      hasBadge: false,
      hasCounter: false,
      selected: false,
      onClick: () => {}
    },
    {
      id: 'user_menu_02',
      icon: upgradeIcon,
      label: 'Upgrade',
      hasAlert: false,
      hasBadge: false,
      hasCounter: false,
      selected: true,
      onClick: () => {}
    },
    {
      id: 'user_menu_03',
      icon: notifyIcon,
      label: 'Notificações',
      hasAlert: false,
      hasBadge: false,
      hasCounter: false,
      selected: false,
      onClick: () => {}
    }
  ]

  return (
    <S.NavBarUser>
      {userMenus.map((button) => (
        <NavButton
          key={button.id}
          icon={button.icon}
          label={button.label}
          hasAlert={button.hasAlert}
          hasBadge={button.hasBadge}
          selected={button.selected}
          onClick={button.onClick}
        />
      ))}
      <UserInfos />
      <NavButton
        icon={menuIcon}
        label="Menu"
        hasAlert={false}
        hasBadge={false}
        selected={false}
        onClick={() => {}}
      />
    </S.NavBarUser>
  )
}
