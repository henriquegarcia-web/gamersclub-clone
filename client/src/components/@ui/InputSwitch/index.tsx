import { useState } from 'react'

import * as S from './styles'

import { motion } from 'framer-motion'

interface IInputSwitch {}

const InputSwitch = ({}: IInputSwitch) => {
  const [isActive, setIsActive] = useState(false)

  const handleToggleActive = () => setIsActive(!isActive)

  return (
    <S.InputSwitch onClick={handleToggleActive}>
      <motion.div
        initial={{ opacity: 1, x: 20 }}
        animate={{ opacity: 1, x: isActive ? 20 : 0 }}
        exit={{ opacity: 1, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <S.InputSwitchIndicator />
      </motion.div>
    </S.InputSwitch>
  )
}

export default InputSwitch
