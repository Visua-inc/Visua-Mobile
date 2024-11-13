import Layout from '@/components/layout'
import { View } from 'react-native'

export default function LayoutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Layout children={undefined} />
    </View>
  )
}
