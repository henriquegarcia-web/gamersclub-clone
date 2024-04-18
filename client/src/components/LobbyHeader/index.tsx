import { useState } from 'react'

import { Icons } from '@/assets/icons'
import * as S from './styles'

import { MdOutlineFilterList } from 'react-icons/md'

import { Button, Indicator, InputSwitch, InputRadio } from '@/components'

interface ILobbyHeader {}

const LobbyHeader = ({}: ILobbyHeader) => {
  const [selectedOption, setSelectedOption] = useState('option-rooms')

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value)
  }

  return (
    <S.LobbyHeader>
      <S.LobbyTopHeader>
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
          <S.SwitchAction>
            <p>Modo lite</p>
            <InputSwitch />
          </S.SwitchAction>
        </S.LobbyHeaderActions>
      </S.LobbyTopHeader>
      <S.LobbyMainHeader>
        <S.LobbyMainFilter>
          <S.LobbyMainFilterContent>
            <S.FilterLabel>
              <p>SKILL LEVEL</p>
              <img src="/icons/question.svg" alt="Skill Level Icon" />
            </S.FilterLabel>
            <S.FilterRadios>
              <InputRadio
                label="Salas"
                value="option-rooms"
                checked={selectedOption === 'option-rooms'}
                onChange={handleOptionChange}
              />
              <InputRadio
                label="Jogadores"
                value="option-players"
                checked={selectedOption === 'option-players'}
                onChange={handleOptionChange}
              />
            </S.FilterRadios>
            <S.FilterFlag>
              <img src="/icons/filter.svg" alt="Filter Icon" />- 21
            </S.FilterFlag>
          </S.LobbyMainFilterContent>
          <S.LobbyMainFilterSlide>
            <S.FilterSlideThumbPrimary />
            <S.FilterSlideTrack />
            <S.FilterSlideThumbSecondary />
          </S.LobbyMainFilterSlide>
        </S.LobbyMainFilter>
        <S.LobbyFilter>
          <MdOutlineFilterList />
          Filtros (1)
        </S.LobbyFilter>
        <S.LobbyActions>
          <Button
            type="primary"
            icon={<img src="/icons/fast.svg" alt="Fast Lobby Icon" />}
            label="Partida Rápida"
            onClick={() => {}}
          />
          <Button
            type="secondary"
            icon={<img src="/icons/create.svg" alt="Create Lobby Icon" />}
            label="Criar Lobby"
            onClick={() => {}}
          />
        </S.LobbyActions>
      </S.LobbyMainHeader>
    </S.LobbyHeader>
  )
}

export default LobbyHeader
