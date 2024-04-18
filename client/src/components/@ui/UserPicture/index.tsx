import * as S from './styles'

interface IUserPicture {
  userImage: string
}

const UserPicture = ({ userImage }: IUserPicture) => {
  return (
    <S.UserPicture>
      <S.UserPictureImage src={userImage} alt="User Profile Picture" />
    </S.UserPicture>
  )
}

export default UserPicture
