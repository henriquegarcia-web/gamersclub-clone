import { Icons } from '@/assets/icons'
import * as S from './styles'

import { Indicator } from '@/components'

interface ILobbyHeader {}

const LobbyHeader = ({}: ILobbyHeader) => {
  return (
    <S.LobbyHeader>
      <S.LobbyHeaderIndicators>
        <S.LinkIndicator>
          Dicas de CS2
          <img src="/icons/link.svg" alt="Link Icon" />
        </S.LinkIndicator>
        <Indicator label="Disponíveis:" value={40} />
        <Indicator label="Live:" value={250} />
        <Indicator label="Vetando:" value={150} />
      </S.LobbyHeaderIndicators>
      <S.LobbyHeaderActions>
        <S.GameAction>
          <S.GameActionImage>
            <img src={Icons.challengeIcon} alt="" />
          </S.GameActionImage>
          <S.GameActionContent>
            <p>Desafio RP</p>
            <b>Comprar</b>
          </S.GameActionContent>
        </S.GameAction>
        <S.GameAction>
          <S.GameActionImage>
            <img src={Icons.rpIcon} alt="" />
          </S.GameActionImage>
          <S.GameActionContent>
            <p>Freeze RP</p>
            <b>Comprar</b>
          </S.GameActionContent>
        </S.GameAction>
      </S.LobbyHeaderActions>
    </S.LobbyHeader>
  )
}

export default LobbyHeader
