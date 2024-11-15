import { View } from 'react-native'
import Cadastro from '@/components/cadastro';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Cadastro/>
    </View>
  )
}
