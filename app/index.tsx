import AlterarDados from '@/components/alterarDados'
import Visua_Cam from '@/components/camera'
import Layout from '@/components/layout'
import PopUp from '@/components/popUp'
import useVisibilityManager from '@/hooks/useVisibilityManager'
import React from 'react'
import { View } from 'react-native'

export default function Index() {
  const { alterVisible, delVisible, clearVisible, outVisible, open, close } =
    useVisibilityManager()

  return (
    <Layout alterButton={() => open('alterVisible')}>
      <PopUp
        isVisible={delVisible}
        buttonText='Apagar'
        contentText1='Deseja Apagar sua conta?'
        contentText2='Ela não pode ser recuperada posteriormente.'
        onOpen={() => open('delVisible')}
        onClose={() => close('delVisible')}
      />
      <PopUp
        isVisible={clearVisible}
        buttonText='Limpar'
        contentText1='Deseja realmente limpar os dados do histórico?'
        contentText2='Eles não poderão ser recuperados.'
        onOpen={() => open('clearVisible')}
        onClose={() => close('clearVisible')}
      />
      <PopUp
        isVisible={outVisible}
        buttonText='Sair'
        contentText1='Deseja sair da sua conta?'
        onOpen={() => open('outVisible')}
        onClose={() => close('outVisible')}
      />

      <AlterarDados
        isVisible={alterVisible}
        onOpen={() => open('alterVisible')}
        onClose={() => close('alterVisible')}
        del={() => open('delVisible')}
        out={() => open('outVisible')}
        clear={() => open('clearVisible')}
      />

      <Visua_Cam />
    </Layout>

    // para testar oq vc estiver fazendo comente o layout acima e use essa view em baixo

    // <View style={{ flex: 1 }}>
    //   <Layout>
    //     <AlterarDados />
    //   </Layout>
    // </View>

  )
}
