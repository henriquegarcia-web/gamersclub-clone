import * as S from './styles'

import { Header, LobbyHeader } from '@/components'

// import { useGetTemplate } from '@/hooks/data/useGetTemplate'

interface ILobbyScreen {}

const LobbyScreen = ({}: ILobbyScreen) => {
  // const {
  //   data: dataTemplate,
  //   error: errorTemplate,
  //   fetchStatus,
  //   isLoading
  // } = useGetTemplate()

  return (
    <S.LobbyScreen>
      <Header />
      <S.LobbyScreenContent>
        <S.LobbyScreenContentWrapper>
          <LobbyHeader />
        </S.LobbyScreenContentWrapper>
      </S.LobbyScreenContent>
    </S.LobbyScreen>
  )
}

export default LobbyScreen
