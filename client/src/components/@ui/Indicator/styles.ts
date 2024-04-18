import styled from 'styled-components'
import { Colors } from '@/utils/styles/colors'

export const Indicator = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 2px 8px;
  border-radius: 4px;

  p {
    font-size: 12px;
    font-weight: 400;

    b {
      font-weight: 600;
    }
  }

  color: ${Colors.fontSecondary};
  background-color: ${Colors.backgroundSecondary};
`
