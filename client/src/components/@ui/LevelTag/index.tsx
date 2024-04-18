import * as S from './styles'

interface ILevelTag {
  userLevel: number
}

const LevelTag = ({ userLevel }: ILevelTag) => {
  return <S.LevelTag>{userLevel}</S.LevelTag>
}

export default LevelTag
