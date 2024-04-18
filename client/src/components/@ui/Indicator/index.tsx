import * as S from './styles'

interface IIndicator {
  label: string
  value: number
}

const Indicator = ({ label, value }: IIndicator) => {
  return (
    <S.Indicator>
      <p>
        {label} <b>{value}</b>
      </p>
    </S.Indicator>
  )
}

export default Indicator
