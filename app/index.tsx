import AlterarDados from '@/components/alterarDados'
import Visua_Cam from '@/components/camera'
import Layout from '@/components/layout'
import Loading_Permission from '@/components/loading'
import { useCameraAccess } from '@/hooks/useCamera'
import React from 'react'
import { View } from 'react-native'

export default function Index() {
  const { hasPermission, requestPermission } = useCameraAccess()
  if (!hasPermission) {
    return <Loading_Permission Permission={requestPermission} />
  }

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
