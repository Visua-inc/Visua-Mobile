import Visua_Cam from '@/components/camera'
import Layout from '@/components/layout'
import { View } from 'react-native'

export default function Index() {

  return (
      <Layout>
        <Visua_Cam />
      </Layout>

    // para testar oq vc estiver fazendo comente o layout acima e use essa view em baixo

    // <View style={{ flex: 1 }}>
      
    // </View>
  )
}
