import * as S from './styles'

import { LevelTag, UserPicture } from '@/components'

interface IUserInfos {}

const UserInfos = ({}: IUserInfos) => {
  return (
    <S.UserInfos>
      <S.UserInfosMain>
        <UserPicture userImage="/images/profile-picture.png" />
        <LevelTag userLevel={12} />
      </S.UserInfosMain>
      <S.UserInfosScore>
        <img src="/icons/ranking-crown.svg" alt="Ranking Crown Icon" />
        <p>#--</p>
      </S.UserInfosScore>
    </S.UserInfos>
  )
}

export default UserInfos
