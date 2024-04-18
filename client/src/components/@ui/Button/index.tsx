import * as S from './styles'

interface IButton {
  type: 'primary' | 'secondary'
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

const Button = ({ type, icon, label, onClick }: IButton) => {
  if (type === 'primary')
    return (
      <S.PrimaryButton onClick={onClick && onClick}>
        {icon}
        <p>{label}</p>
      </S.PrimaryButton>
    )
  return (
    <S.SecondaryButton onClick={onClick && onClick}>
      {icon}
      <p>{label}</p>
    </S.SecondaryButton>
  )
}

export default Button
