import * as S from './styles'

interface ILobbyLevelTag {
  lobbyLevel: number
}

const LobbyLevelTag = ({ lobbyLevel }: ILobbyLevelTag) => {
  return (
    <S.LobbyLevelTag>
      <S.LobbyLevelTagWrapper>{lobbyLevel}</S.LobbyLevelTagWrapper>
    </S.LobbyLevelTag>
  )
}

export default LobbyLevelTag
