import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 4px;
  padding: 8px 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;

  p {
    padding-top: 3px;

    font-size: 22px;
    line-height: 22px;
    font-weight: 400;
    text-transform: uppercase;
  }

  img {
    width: 20px;
    height: 20px;
  }
`

export const PrimaryButton = styled(Button)`
  color: ${Colors.fontSecondary};
  background-color: ${Colors.brand};
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    background-color: ${Colors.brandLight};
  }
`

export const SecondaryButton = styled(Button)`
  color: ${Colors.fontPrimary};
  background-color: ${Colors.warning};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: rgba(255, 255, 255, 0.32) 0px 1px 0px 0px inset,
    rgba(255, 255, 255, 0.16) -1px 0px 0px 0px inset,
    rgba(255, 255, 255, 0.16) 0px -1px 0px 0px inset,
    rgba(255, 255, 255, 0.16) 1px 0px 0px 0px inset,
    rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.08) 0px 4px 4px 0px;

  &:hover {
    background-color: ${Colors.warningLight};
  }
`
