import * as S from './styles'

import { HiOutlineArrowSmallRight } from 'react-icons/hi2'

import { LevelTag, LobbyLevelTag, LobbyUserPicture } from '@/components'

import { ILobby } from '@/@types/lobby'

interface ILobbyCard {
  lobby: ILobby
}

const LobbyCard = ({ lobby }: ILobbyCard) => {
  return (
    <S.LobbyCard>
      <S.LobbyCardHeader>
        <S.LobbyCardStamps>
          <S.PremiumStamp>
            <img src="/icons/premium.svg" alt="Premium Icon" />
          </S.PremiumStamp>
          <LobbyLevelTag lobbyLevel={15} />
          <S.VerifiedStamp>
            <img src="/icons/verified.svg" alt="Verified Icon" />
          </S.VerifiedStamp>
        </S.LobbyCardStamps>
        <p>Time {lobby.lobbyName}</p>
      </S.LobbyCardHeader>
      <S.LobbyCardPlayers>
        <PlayerCard />
        <PlayerCard empty />
        <PlayerCard empty />
        <PlayerCard empty />
        <PlayerCard empty />
      </S.LobbyCardPlayers>
      <S.LobbyCardEntry>
        <HiOutlineArrowSmallRight /> Entrar
      </S.LobbyCardEntry>
    </S.LobbyCard>
  )
}

export default LobbyCard

// ========================================== PLAYER CARD

interface IPlayerCard {
  empty?: boolean
}

const PlayerCard = ({ empty = false }: IPlayerCard) => {
  if (empty)
    return (
      <S.PlayerCard>
        <S.PlayerCardImage>
          <span />
        </S.PlayerCardImage>
        <S.PlayerCardLevel>
          <span />
        </S.PlayerCardLevel>
        <S.PlayerCardStamps></S.PlayerCardStamps>
      </S.PlayerCard>
    )

  return (
    <S.PlayerCard>
      <S.PlayerCardImage>
        <LobbyUserPicture userImage="/images/profile-picture.png" />
      </S.PlayerCardImage>
      <S.PlayerCardLevel>
        <LevelTag userLevel={12} />
      </S.PlayerCardLevel>
      <S.PlayerCardStamps></S.PlayerCardStamps>
    </S.PlayerCard>
  )
}
