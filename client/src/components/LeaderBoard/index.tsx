import * as S from './styles'

import { NavButton } from '@/components'

interface ILeaderBoard {}

const LeaderBoard = ({}: ILeaderBoard) => {
  return (
    <S.LeaderBoard>
      <NavButton
        icon={<img src="/icons/ranking-crown.svg" alt="Ranking Crown Icon" />}
        label="Season 2"
        onClick={() => {}}
      />
      <S.LeaderBoardDivider
        src="/icons/chevron-big.svg"
        alt="Ranking Crown Icon"
      />
      <S.LeaderBoardCountdown>
        <S.LeaderBoardCountdownLabel>Acaba em</S.LeaderBoardCountdownLabel>
        <S.LeaderBoardCountdownDate>58 dias</S.LeaderBoardCountdownDate>
      </S.LeaderBoardCountdown>
    </S.LeaderBoard>
  )
}

export default LeaderBoard
