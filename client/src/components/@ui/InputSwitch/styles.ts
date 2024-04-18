import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const InputSwitch = styled.button`
  position: relative;
  display: flex;
  width: 44px;
  height: 24px;
  border-radius: 50px;
  cursor: pointer;

  background-color: ${Colors.backgroundTertiary};
  border: 1px solid rgba(250, 249, 247, 0.08);
`

export const InputSwitchIndicator = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 100%;

  background-color: white;
`
