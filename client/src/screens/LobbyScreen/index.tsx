import * as S from './styles'

import { Header, LobbyHeader, LobbyCard } from '@/components'

import { ILobby } from '@/@types/lobby'

// import { useGetTemplate } from '@/hooks/data/useGetTemplate'

interface ILobbyScreen {}

const LobbyScreen = ({}: ILobbyScreen) => {
  // const {
  //   data: dataTemplate,
  //   error: errorTemplate,
  //   fetchStatus,
  //   isLoading
  // } = useGetTemplate()

  const lobbysData = [
    {
      lobbyId: 'lobby-01',
      lobbyLevel: 12,
      lobbyIsPrime: false,
      lobbyIsVerified: false,
      lobbyName: 'Bochecha',
      lobbyCountry: 'br',
      lobbyPlayers: []
    }
  ]

  return (
    <S.LobbyScreen>
      <Header />
      <S.LobbyScreenContent>
        <S.LobbyScreenContentWrapper>
          <LobbyHeader />
          <S.LobbyListWrapper>
            {lobbysData.map((lobby: ILobby) => (
              <LobbyCard key={lobby.lobbyId} lobby={lobby} />
            ))}
          </S.LobbyListWrapper>
        </S.LobbyScreenContentWrapper>
      </S.LobbyScreenContent>
    </S.LobbyScreen>
  )
}

export default LobbyScreen
