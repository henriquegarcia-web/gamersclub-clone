import * as S from './styles'

interface ILobbyUserPicture {
  userImage: string
}

const LobbyUserPicture = ({ userImage }: ILobbyUserPicture) => {
  return (
    <S.LobbyUserPicture>
      <S.LobbyUserPictureImage src={userImage} alt="User Profile Picture" />
    </S.LobbyUserPicture>
  )
}

export default LobbyUserPicture
