import AlterarDados from '@/components/alterarDados'
import Visua_Cam from '@/components/camera'
import Layout from '@/components/layout'
import React from 'react'
import { View } from 'react-native'

export default function Index() {
  return (
    <Layout>
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
