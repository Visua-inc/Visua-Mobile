import Visua_Cam from '@/components/camera'
import Layout from '@/components/layout'
import Loading_Permission from '@/components/loading'
import PopUp from '@/components/popUp'
import { useCameraAccess } from '@/hooks/useCamera'
import useVisibilityManager from '@/hooks/useVisibilityManager'
import { View } from 'react-native'

export default function Index() {
  const { hasPermission, requestPermission } = useCameraAccess()
  const { delVisible, clearVisible, outVisible, open, close } =
    useVisibilityManager()

  if (!hasPermission) {
    return <Loading_Permission Permission={requestPermission} />
  }

  return (
    <Layout>
      <PopUp
        isVisible={delVisible}
        buttonText='Apagar'
        contentText1='Deseja Apagar sua conta?'
        contentText2='Ela não pode ser recuperada posteriormente.'
        onOpen={() => {
          open('delVisible')
        }}
        onClose={() => {
          close('delVisible')
        }}
      />
      <PopUp
        isVisible={clearVisible}
        buttonText='Limpar'
        contentText1='Deseja realmente limpar os dados do histórico?'
        contentText2='Eles não poderão ser recuperados.'
        onOpen={() => {
          open('clearVisible')
        }}
        onClose={() => {
          close('clearVisible')
        }}
      />
      <PopUp
        isVisible={outVisible}
        buttonText='Sair'
        contentText1='Deseja sair da sua conta?'
        onOpen={() => {
          open('outVisible')
        }}
        onClose={() => {
          close('outVisible')
        }}
      />

      <Visua_Cam />
    </Layout>

    // para testar oq vc estiver fazendo comente o layout acima e use essa view em baixo

    // <View style={{ flex: 1 }}>
    //   <Layout>
    //     <Visua_Cam />
    //   </Layout>
    // </View>
  )
}
