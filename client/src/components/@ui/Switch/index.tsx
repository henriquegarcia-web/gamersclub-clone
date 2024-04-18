import { useState } from 'react'

import * as S from './styles'

import { AnimatePresence, motion } from 'framer-motion'

interface ISwitch {}

const Switch = ({}: ISwitch) => {
  const [isActive, setIsActive] = useState(false)

  const handleToggleActive = () => setIsActive(!isActive)

  return (
    <S.Switch onClick={handleToggleActive}>
      <motion.div
        initial={{ opacity: 1, x: 20 }}
        animate={{ opacity: 1, x: isActive ? 20 : 0 }}
        exit={{ opacity: 1, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <S.SwitchIndicator />
      </motion.div>
    </S.Switch>
  )
}

export default Switch
