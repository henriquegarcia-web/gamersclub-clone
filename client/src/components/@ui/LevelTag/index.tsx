import * as S from './styles'

interface ILevelTag {
  userLevel: number
  large?: boolean
}

const LevelTag = ({ userLevel, large = false }: ILevelTag) => {
  return <S.LevelTag>{userLevel}</S.LevelTag>
}

export default LevelTag
