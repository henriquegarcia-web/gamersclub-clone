import * as S from './styles'

interface INavButton {
  icon: React.ReactNode
  label: string
  selected?: boolean
  hasAlert?: boolean
  hasBadge?: boolean
  hasCounter?: boolean
  onClick?: () => void
}

const NavButton = ({
  icon,
  label,
  selected = false,
  hasAlert = false,
  hasBadge = false,
  hasCounter = false,
  onClick
}: INavButton) => {
  return (
    <S.NavButton selected={selected ? 1 : 0} onClick={onClick && onClick}>
      {hasBadge && <S.NavButtonFlag />}
      {hasAlert && <S.NavButtonIndicator />}

      <S.NavButtonWrapper hasalert={hasAlert ? 1 : 0}>
        <S.NavButtonIcon>{icon}</S.NavButtonIcon>
        <S.NavButtonLabel hasalert={hasAlert ? 1 : 0}>{label}</S.NavButtonLabel>
        <div></div>
        <p></p>
      </S.NavButtonWrapper>
    </S.NavButton>
  )
}

export default NavButton
