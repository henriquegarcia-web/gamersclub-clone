import * as S from './styles'

interface IInputRadio {
  label: string
  value: string
  checked: boolean
  onChange?: any
}

const InputRadio = ({ label, value, checked, onChange }: IInputRadio) => {
  return (
    <S.InputRadio>
      <S.HiddenRadioInput
        value={value}
        checked={checked ? 1 : 0}
        onChange={onChange && onChange}
      />
      <S.CustomRadio checked={checked ? 1 : 0} />
      {label}
    </S.InputRadio>
  )
}

export default InputRadio
