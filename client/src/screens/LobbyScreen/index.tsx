import * as S from './styles'

import { Header } from '@/components'

// import { useGetTemplate } from '@/hooks/data/useGetTemplate'

interface ITemplateScreen {}

const TemplateScreen = ({}: ITemplateScreen) => {
  // const {
  //   data: dataTemplate,
  //   error: errorTemplate,
  //   fetchStatus,
  //   isLoading
  // } = useGetTemplate()

  return (
    <S.TemplateScreen>
      <Header />
    </S.TemplateScreen>
  )
}

export default TemplateScreen
